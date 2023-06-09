/*
In GEE Earth Engine objects (starting with ee.) are distinguished from other JavaScript objects.
EE objects serve as a proxy for objects on the server and the server side objects can be manipulated using specific EE functions
Processing should be done on the server as much as possible
*/

// Client side calculation
var a = 5;
var b = 3;

print(a+b); // this works!

// Server side calculation
var c = ee.Number(5);
var d = ee.Number(3);

print(c+d); // this does not work!
print(c.add(d)); //this works!

print(typeof(a));
print(typeof(c));