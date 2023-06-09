var bgd = ee.FeatureCollection("FAO/GAUL/2015/level0")
              .filter(ee.Filter.eq('ADM0_NAME','Bangladesh'));

// define start and end
var start = '2018-01-01';
var end = '2018-12-31';

var palsar = ee.ImageCollection('JAXA/ALOS/PALSAR/YEARLY/SAR')
                .filterBounds(bgd)
                .select(['HH','HV'])
                .filter(ee.Filter.date(start, end));

var s1 = ee.ImageCollection("COPERNICUS/S1_GRD")
      .filterDate(start, end)
      .filterMetadata('instrumentMode', 'equals', 'IW')
      .filterMetadata('orbitProperties_pass', 'equals', 'ASCENDING')
      .filterMetadata('transmitterReceiverPolarisation', 'equals', ['VV','VH'])
      .select(['VV','VH'])
      .filterBounds(bgd);


// We convert both image collections into images and clip to the country extent.
var firsts1 = s1.mosaic();
var firstpalsar = palsar.first();

firsts1 = firsts1.clipToCollection(bgd);
firstpalsar = firstpalsar.clipToCollection(bgd);

// Visualisation parameters
var visParamsS1 = {
  bands: ['VV'],
  min: [-18], 
  max: [0]
};

var visParamsPS = {
  bands: ['HH'],
  min: [0], 
  max: [13000]
};

// We create two seperate maps.
var leftmap = ui.Map();
var rightmap = ui.Map();

// And split the window into two.
var splitPanel = ui.SplitPanel({
  firstPanel: leftmap,
  secondPanel: rightmap,
  orientation: 'horizontal',
  wipe: true
});

// The iamges are added to the two new maps.
var s1image = ui.Map.Layer(firsts1,visParamsS1);
var psimage = ui.Map.Layer(firstpalsar,visParamsPS);

var s1layer = leftmap.layers();
var pslayer = rightmap.layers();

s1layer.add(s1image);
pslayer.add(psimage);

var s1label = ui.Label('Sentinel-1');
var pslabel = ui.Label('ALOS Palsar');

s1label.style().set('position','bottom-left');
pslabel.style().set('position','bottom-right');

leftmap.add(s1label);
rightmap.add(pslabel);

// Clearing default map visualization and adding split map panel.
ui.root.clear();
ui.root.add(splitPanel);

// Linking the two maps together and setting zoom level.
var linkPanel = ui.Map.Linker([leftmap,rightmap]);
leftmap.centerObject(bgd,9);
rightmap.centerObject(bgd,9);