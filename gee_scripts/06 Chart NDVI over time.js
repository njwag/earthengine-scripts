/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var forest = 
    /* color: #98ff00 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[9.766714454956066, 52.392590653055464],
                  [9.766714454956066, 52.38489041940369],
                  [9.780189873046886, 52.38489041940369],
                  [9.780189873046886, 52.392590653055464]]], null, false),
            {
              "class": "forest",
              "system:index": "0"
            })]),
    agriculture = 
    /* color: #0b4a8b */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[9.60620053297069, 52.37387061042109],
                  [9.60620053297069, 52.36506650175166],
                  [9.618216829357408, 52.36506650175166],
                  [9.618216829357408, 52.37387061042109]]], null, false),
            {
              "class": "agriculture",
              "system:index": "0"
            })]),
    urban = 
    /* color: #ffc82d */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[9.732886629162095, 52.37751009226631],
                  [9.732886629162095, 52.37069810407962],
                  [9.742671327648424, 52.37069810407962],
                  [9.742671327648424, 52.37751009226631]]], null, false),
            {
              "class": "urban",
              "system:index": "0"
            })]),
    s2 = ee.ImageCollection("COPERNICUS/S2_SR");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/*
Image collections can be used to do multi-temporal anlyses. In this notebook we are going to plot 
NDVI values for different land use types in Hannover over a whole year.
*/

// Merge the different "classes" into one feature collection
var regions = urban.merge(forest).merge(agriculture);

Map.addLayer(regions);
Map.centerObject(regions,12);
print(regions);

// Define a function that will add an NDVI band to an Sentinel-2 image
var addNDVI = function(image) {
  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
  return image.addBands(ndvi);
};

// Filter and map (apply) the function over the collection.
var withNDVI = s2.filterDate('2020-11-01', '2021-11-30').map(addNDVI);

var chart = ui.Chart.image.seriesByRegion({
          imageCollection: withNDVI,
          band: 'NDVI',
          regions: regions,
          reducer: ee.Reducer.mean(),
          scale: 10,
          seriesProperty: 'class',
          xProperty: 'system:time_start'
        })
        .setOptions({ // set the visualization options for the chart
          title: 'Average NDVI by Date and Region',
          hAxis: {title: 'Date', titleTextStyle: {italic: false, bold: true}},
          vAxis: {title: 'NDVI', titleTextStyle: {italic: false, bold: true}},
          lineWidth: 2,
          colors: ['f0af07', '0f8755', '76b349'],
        });
        
// Display chart in Console
print(chart);