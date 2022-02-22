import cellblender as cb
dm = cb.get_data_model()
mcell = dm['mcell']
rels = mcell['release_sites']
rlist = rels['release_site_list']
point_list = []
for x in range(10):
    for y in range(10):
        point_list.append([x/100,y/100,0.0])
for x in range(10):
    for y in range(10):
        point_list.append([x/100 - 0.5,y/100 - 0.5,0.0])
for x in range(10):
    for y in range(10):
        point_list.append([x/100 - 0.8,y/100,0.0])
for x in range(10):
    for y in range(10):
        point_list.append([x/100 + 0.8,y/100 - 0.8,0.0])
new_rel = {
    'data_model_version' : "DM_2015_11_11_1717",
    'location_x' : "0",
    'location_y' : "0",
    'location_z' : "0",
    'molecule' : "B",
    'name' : "pred_rel",
    'object_expr' : "arena",
    'orient' : "'",
    'pattern' : "",
    'points_list' : point_list,
    'quantity' : "400",
    'quantity_type' : "NUMBER_TO_RELEASE",
    'release_probability' : "1",
    'shape' : "LIST",
    'site_diameter' : "0.01",
    'stddev' : "0"
}
rlist.append ( new_rel )
cb.replace_data_model ( dm )