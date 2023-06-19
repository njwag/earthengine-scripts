/* 
In this exercise, you will load the population density dataset from the WorldPop mapping project for the year 2020.
Then crop it to the administrative boundaries for Lower Saxony.
*/
var population = ee.ImageCollection("WorldPop/GP/100m/pop");

var nisx = ee.FeatureCollection("FAO/GAUL/2015/level1")
              .filter(ee.Filter.eq('ADM1_NAME','Niedersachsen'))
;

Map.setCenter(10.340916,51.399405,6);
//Map.addLayer(nisx);

// Filter population dataset by year 2020. Use .filterDate() function.
var pop2020 = population.filterDate('2020'); 

// Convert the population image collection to a single image
pop2020 = pop2020.mosaic();

// Clip the population image to the administrative boundary of Lower Saxony
var pop_nisx = pop2020.clip(nisx);

var popviz = {
  bands: ['population'],
  min: 0.0,
  max: 50.0,
  //opacity: 0.5,
  palette: ['24126c', '1fff4f', 'd4ff50']
};

// Add the population layer to the map using the pre-defined visualization parameters
Map.addLayer(pop_nisx, popviz, 'Population 2020');

// Calculate total population
var pop_count = pop_nisx.reduceRegion({
  scale : 92.7,
  reducer : ee.Reducer.sum(), 
  geometry : nisx, 
  bestEffort  : true
  });
  
print(pop_count);