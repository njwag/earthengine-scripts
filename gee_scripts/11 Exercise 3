/* 
In this exercise, you will execute a Random Forest classification of Sentinel-2 data covering an 
area of your choosing. The classification will contain 4 classes: urban, forest, agriculture and 
water.
*/

/* The first step is to define your area of interest (aoi). Use the drawing tool to draw a polygon 
or rectangle covering your aoi. Alternatively, you can choose to work with the administrative boundaries 
contained in the FAO GAUL dataset that you know from the previous exercises. Remember that level 0 
administrative boundaries represent country boundaries while level 1 and 2 are smaller subdivisions 
such as federal states and cities.*/

var aoi = ;

Map.centerObject(aoi,10);
Map.addLayer(aoi);


// Display all S2 images that intersect your aoi in the specified date range.
var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
                            .filterBounds(aoi)
                            .filterDate('2021-01-01', '2021-08-31');

// visualization parameters for Sentinel-2 RGB
var viz = {
  min: 0.0,
  max: 3000.0,
  bands: ['B4', 'B3', 'B2']
};

// Filter the image collection by cloud percentage and keep only images with less than 10% cloud cover.
var s2_cloudfilter = ;

// Mosaic the cloud filtered image collection. This will convert the most recent images in the collection to a single image mosaic.
var mosaic = s2_cloudfilter.mosaic();

/* Clip your image to your AOI. If you're using the FAO GAUL dataset use the image.clipToCollection() 
function. Otherwise use image.clip() */
var clipped = ;
Map.addLayer(clipped,viz,'Sentinel-2 mosaic');


/* Next, create four feature collections containing training data for the urban, water and forest classes.
Name them forest, agriculture, water and urban respectively and create a property called landcover with 
values 0,1,2, and 3 respectively. */


// Once you've created the four feature collections uncomment the next line.
//var newfc = forest.merge(agriculture).merge(water).merge(urban);

// Select the bands for training (see dataset documentation for more information)
var bands = ['??', '??', ...];

// Sample the input imagery to get a FeatureCollection of training data.
var training = clipped.select(bands).sampleRegions({
  collection: newfc,
  properties: ['landcover'],
  scale: 20
});

// Make a Random Forest classifier and train it. What happens if you change the number of trees from 10 to 20 or to 5?
var classifier = ee.Classifier.smileRandomForest(10).train({
  features: training,
  classProperty: 'landcover',
  inputProperties: bands
});

// Classify the input imagery.
var classified = clipped.select(bands).classify(classifier);

// Define a palette for the Land Use classification.
var palette = [
  '#00a518', //  forest (0) // green
  '#b3a900', // agriculture (1)  // brown
  '#106ece', // water (2)  // blue
  '#7e8a85' // urban (3)  // grey
];

// Display the classification result and the input image.
Map.addLayer(classified, {min: 0, max: 3, palette: palette}, 'Land Use Classification');

// Get a confusion matrix representing resubstitution accuracy.
print('RF error matrix: ', classifier.confusionMatrix());
print('RF accuracy: ', classifier.confusionMatrix().accuracy());
