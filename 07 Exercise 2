/* 
In this exercise, you will load the population density dataset from the WorldPop mapping project for the year 2020.
Then crop it to the administrative boundaries for Lower Saxony.
*/
var population = ee.ImageCollection("WorldPop/GP/100m/pop");

var nisx = ee.FeatureCollection("FAO/GAUL/2015/level1")
              .filter(ee.Filter.eq('ADM1_NAME','Niedersachsen'))
;

Map.setCenter(10.340916,51.399405,6);

// Filter population dataset by year 2020. Use .filterDate() function.
var pop2020 = ; 

// Convert the population image collection to a single image
pop2020 = ;

// Clip the population image to the administrative boundary of Lower Saxony
var pop_nisx = ;

var popviz = {
  bands: ['population'],
  min: 0.0,
  max: 50.0,
  //opacity: 0.5,
  palette: ['24126c', '1fff4f', 'd4ff50']
};

// Add the population layer to the map using the pre-defined visualization parameters
Map.addLayer();