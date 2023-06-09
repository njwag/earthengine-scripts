/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var s22 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/* Image collections are sets of images from the same sensor. You can use image collections 
to make multi-temporal analyses or calculate temporal statistics. For example, the image collection
ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA') contains all Landsat 8 images covering the whole world.
It is possible to filter image collections spatially, temporally, by image band or by other parameters. */

// We define a point. In the next step, we import scenes that intersect this point.
var point = ee.Geometry.Point(90.406973, 23.736255);

/* Image collections can be called through the code editor using the ee.ImageCollection() function 
or they can be searched and imported with the search bar.*/

var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
                            .filterBounds(point)  // Image collections can be filtered spatially 
                            //(in this case scenes intersecting the point) ...
                            .filterDate('2020-01-01', '2020-03-31'); //... in time ...
                          //.select(['B2', 'B3', 'B4']); // ... or by band amongst others.


// To see, which scenes are contained in the image collection, we print the metadata to the console.  
print(s2);

// The image collection is sorted from least to most cloudy using the image metadata flag 'CLOUD_COVERAGE_ASSESSMENT'
var sorted = s2.sort('CLOUD_COVERAGE_ASSESSMENT');

// Get the first (least cloudy) image.
var scene = sorted.first();

// Defining the visualization parameters for a true color composite.
var viz3000 = {
  min: 0.0,
  max: 3000.0,
  bands: ['B4', 'B3', 'B2']
};

var viz6000 = {
  min: 0.0,
  max: 6000.0,
  bands: ['B4', 'B3', 'B2']
};

var viz15000 = {
  min: 0.0,
  max: 15000.0,
  bands: ['B4', 'B3', 'B2']
};

Map.setCenter(90.406973, 23.736255, 12);

Map.addLayer(scene, viz3000, 'Least cloudy');

// We can also do calculations (so called reductions) on the whole image collection such as calculating the pixelwise mean.
var mean = s2.mean();
Map.addLayer(mean, viz6000, 'Mean');

// Cacluating the pixelwise median of the image collection.
var median = s2.median();
Map.addLayer(median, viz3000, 'Median');

// Cacluating the pixelwise minimum of the image collection.
var min = s2.min();
Map.addLayer(min, viz3000, 'Min');

// Cacluating the pixelwise maximum of the image collection.
var max = s2.max();
Map.addLayer(max, viz15000, 'Max');