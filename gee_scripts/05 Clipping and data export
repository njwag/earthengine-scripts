/* 
The GEE archive contains not only image data but also anciliary data on topics such as population density, 
flood frequency and administrative boundaries. The FAO GAUL (Global Administrative Unit Layers) datasets 
are a database of administrative units from all over the world.
*/

var nisx = ee.FeatureCollection("FAO/GAUL/2015/level1")
              .filter(ee.Filter.eq('ADM1_NAME','Niedersachsen'))
;

Map.setCenter(10.340916,51.399405,6);
Map.addLayer(nisx);


// Display all images intersecting geometry (Lower Saxony)
var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
                            .filterBounds(nisx)
                            .filterDate('2021-01-01', '2021-08-31');
//print(s2);
print('Images in collection: ', s2.size());

var viz = {
  min: 0.0,
  max: 3000.0,
  bands: ['B4', 'B3', 'B2']
};

// When displaying an image collection by default the most recent images in the image stack are shown.
Map.addLayer(s2,viz,'S2 collection');

// It is possible to filter an image collection to retain only images with low cloud cover (less than 10% cloudy pixels in this example)
var cloudfilter = s2.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10));
print(cloudfilter);


// Mosaic
// This transforms the image collection into a single image mosaic using the latest available images of the collection.
var mosaic = cloudfilter.mosaic();
print(mosaic);
Map.addLayer(mosaic,viz,'S2 mosaic');


/*
It is possible to clip an image to a geometry or feature collection using the functions clip() or clipToCollection() respectively.
Since we converted the image collection to a single image using the mosaic() function, we can now clip it.
*/

var clipped = mosaic.clipToCollection(nisx);

Map.addLayer(clipped,viz,'Clipped S2 mosaic');


// Exporting image

var clip_export = clipped.select('B.+');

Export.image.toDrive({
  image: clip_export,
  description: 'NiedersachsenS2',
  fileFormat: 'GeoTIFF',
    scale: 200, //pixel size in meter
  maxPixels: 1e13
});

