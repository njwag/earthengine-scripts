/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var SRTM = ee.Image("CGIAR/SRTM90_V4");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/* 
In this exercise you will load an SRTM version 4 digital elevation model 
for an aoi of your choosing and visualize the elevation band.
*/

// The first step is to load the data. You can use the search bar to search for datasets

// The next step is to define your point of interest/aoi

var aoi = ee.Geometry.Polygon([
  9.313845544839804,51.44200988341651,
  11.559430518929892,51.44200988341651,
  11.559430518929892,52.676059410472156,
  9.313845544839804,52.676059410472156,
  9.313845544839804,51.44200988341651
]);
Map.addLayer(aoi);
Map.centerObject(aoi,8);

// Clip your image collection using your aoi

var filtered = SRTM.clip(aoi);

/*
Define your visualisation parameters. The srtm elevation information is given in meters.
Therefore your visualization parameters should take into account the expected topography
in your aoi. You don't need the "bands" parameter since the srtm dataset only has one band.
*/

var visualization = {min:0, max:800};

// Use Map.addLayer() function to add the srtm to your map.
Map.addLayer(filtered,visualization, 'elevation');