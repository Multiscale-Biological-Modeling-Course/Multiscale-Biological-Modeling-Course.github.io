/* ==========================================================================
   Glossary inline tooltips
   Requires GLOSS_DATA from glossary-data.js to be loaded first.
   ========================================================================== */
(function () {
  if (typeof GLOSS_DATA === 'undefined') return;

  /* Build sorted key list: longest first to prevent substring false-positives */
  var sortedTerms = Object.keys(GLOSS_DATA).sort(function (a, b) {
    return b.length - a.length;
  });

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  var SKIP_TAGS = {
    A: 1, CODE: 1, PRE: 1, SCRIPT: 1, STYLE: 1,
    H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, H6: 1,
    TEXTAREA: 1, INPUT: 1, BUTTON: 1
  };

  function collectTextNodes(root) {
    var nodes = [];
    var walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          var p = node.parentNode;
          while (p && p !== root) {
            if (SKIP_TAGS[p.nodeName]) return NodeFilter.FILTER_REJECT;
            if (p.classList && p.classList.contains('gloss-term')) return NodeFilter.FILTER_REJECT;
            p = p.parentNode;
          }
          return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      },
      false
    );
    var n;
    while ((n = walker.nextNode())) nodes.push(n);
    return nodes;
  }

  /* Each term is highlighted only once per page load */
  var matched = {};

  function processTextNode(node) {
    var text = node.nodeValue;
    for (var i = 0; i < sortedTerms.length; i++) {
      var key = sortedTerms[i];
      if (matched[key]) continue;
      var re = new RegExp('(\\b)(' + escapeRegex(key) + ')(\\b)', 'i');
      var m = re.exec(text);
      if (!m) continue;

      matched[key] = true;

      var before    = text.slice(0, m.index + m[1].length);
      var term      = m[2];
      var after     = text.slice(m.index + m[1].length + m[2].length);

      var frag = document.createDocumentFragment();
      if (before) frag.appendChild(document.createTextNode(before));

      var span = document.createElement('span');
      span.className       = 'gloss-term';
      span.textContent     = term;
      span.dataset.glossKey = key;
      frag.appendChild(span);

      var afterNode = document.createTextNode(after);
      frag.appendChild(afterNode);

      node.parentNode.replaceChild(frag, node);

      if (after.trim()) processTextNode(afterNode);
      return true;
    }
    return false;
  }

  function scan() {
    var content = document.querySelector('.page__content');
    if (!content) return;
    var nodes = collectTextNodes(content);
    nodes.forEach(function (n) {
      if (n.parentNode) processTextNode(n);
    });
  }

  /* ---- Tooltip element ---- */
  var tip = document.createElement('div');
  tip.id = 'gloss-tooltip';
  tip.setAttribute('role', 'tooltip');
  tip.innerHTML =
    '<div class="gloss-tooltip__body"></div>' +
    '<a class="gloss-tooltip__link" href="#">Full entry \u2192</a>';
  document.body.appendChild(tip);

  var tipBody = tip.querySelector('.gloss-tooltip__body');
  var tipLink = tip.querySelector('.gloss-tooltip__link');
  var hideTimer;

  function showTip(span) {
    clearTimeout(hideTimer);
    var key  = span.dataset.glossKey;
    var data = GLOSS_DATA[key];
    if (!data) return;

    tipBody.innerHTML = data.def;
    tipLink.href      = '/glossary/#' + data.anchor;
    tip.classList.add('is-visible');

    var r  = span.getBoundingClientRect();
    var tw = tip.offsetWidth  || 280;
    var th = tip.offsetHeight || 80;
    var vw = window.innerWidth;

    var left = r.left + window.scrollX + (r.width  / 2) - (tw / 2);
    var top  = r.top  + window.scrollY - th - 10;

    if (left < 8)          left = 8;
    if (left + tw > vw - 8) left = vw - tw - 8;

    if (top < window.scrollY + 8) {
      top = r.bottom + window.scrollY + 10;
      tip.classList.add('is-below');
    } else {
      tip.classList.remove('is-below');
    }

    tip.style.left = left + 'px';
    tip.style.top  = top  + 'px';
  }

  function hideTip() {
    hideTimer = setTimeout(function () {
      tip.classList.remove('is-visible');
    }, 180);
  }

  document.addEventListener('mouseover', function (e) {
    if (e.target && e.target.classList && e.target.classList.contains('gloss-term')) showTip(e.target);
  });
  document.addEventListener('mouseout', function (e) {
    if (e.target && e.target.classList && e.target.classList.contains('gloss-term')) hideTip();
  });
  tip.addEventListener('mouseover', function () { clearTimeout(hideTimer); });
  tip.addEventListener('mouseout',  function () { hideTip(); });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scan);
  } else {
    scan();
  }
})();
