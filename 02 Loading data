/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var S2 = ee.ImageCollection("COPERNICUS/S2_SR"),
    srtm = ee.Image("CGIAR/SRTM90_V4");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Import directly in code
var s2 = ee.ImageCollection("COPERNICUS/S2_SR");
var srtm = ee.Image("CGIAR/SRTM90_V4");

// Define AOI
var aoi = ee.Geometry.Point([9.757088292007596,52.37948642417903]);

// Add point to map
Map.addLayer(aoi);
Map.centerObject(aoi,12);

// Define start and end date
var start = '2022-01-01';
var end = '2022-04-01';

// And filter data by date
var temporalFiltered = S2.filterDate(start,end);

// Then select only images that intersect with your AOI
var spatialFiltered = temporalFiltered.filterBounds(aoi);

// This will sort from least to most cloudy.
var sorted = spatialFiltered.sort('CLOUDY_PIXEL_PERCENTAGE');

// Get the first (least cloudy) image.
var scene = sorted.first();

// Define visualization parameters (histogram stretch and bands to be visualized)
var visualization = {min:0, max:4500, bands:['B4','B3','B2']};

// Add the selected image to the map
Map.addLayer(scene, visualization, 'true color');

// You can inspect the image metadata using the console by printing the object in question
print(scene);