var geometry = ee.Geometry.Point([9.757088292007596,52.37948642417903]);

var s1 = ee.ImageCollection("COPERNICUS/S1_GRD")
      .filterDate('2021-05-01', '2021-08-31')
      .filterMetadata('instrumentMode', 'equals', 'IW')
      .filterMetadata('orbitProperties_pass', 'equals', 'ASCENDING')
      .filterMetadata('transmitterReceiverPolarisation', 'equals', ['VV', 'VH'])
      .filterBounds(geometry);

Map.centerObject(geometry,10);

// We select the first image from the collection.
var s1First = s1.first();
print(s1First);

/*Calculating the VV/VH ratio. The ratio is used for RGB composites to represent the blue channel 
since it takes on small values for waterbodies. Sentinel-1 GRD data in GEE is in logarithmic scale (in dB).
When working with logarithmic data, ratios are achieved by subtraction.
*/
var VV_VH_ratio = s1First.select('VV').subtract(s1First.select('VH'))

// The ratio is added to tthe image as a new band and named VV_1 by default.
var s1First = s1First.addBands(VV_VH_ratio);

// Visualisation parameters
var visParamsRGB = {
  bands: ['VV', 'VH', 'VV_1'],
  min: [-18,-25, 1], 
  max: [0, -5, 15]
};

/* The RGB vsualisation is supposed to represent the three dominant backscattering mechanisms that occur 
in SAR image acquisition. The red channel is set to the co-polarized band (VV). This polarization shows high 
values for double bounce scattering which occurs primarily on houses and other geometrically well defined 
artificial structures. The green channel is set to the cross-polarized channel (VH). This channel shows high 
values for diffuse scattering (volume scattering). This occurs mainly in forests where the signal is reflected 
multiple times by the leaves and stems and reflected in all direction. In this process, the signal often changes
polarization. Lastly, the VV/VH ratio is high for flat fields like airstrips and for waterbodies. On these surfaces
single bounce scattering dominates i.e. most of the signal is reflected away from the sensor.*/
Map.addLayer(s1First, visParamsRGB, '"Raw" Sentinel-1 RGB composite');
