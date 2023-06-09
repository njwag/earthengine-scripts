// One-line comments are initiated with two slashes

/* 
Multi-line comments are initiated by a singleslash followed by a star and terminated by a
star followed by a single slash. Comments are ignored when running the code.
*/

/* 
Variables are used to store objects, and are defined using the keyword var followed by an equal sign (=) 
and the desired value of the variable. Variables can be used to store (for example) numbers, text, 
booleans, ... But they can also hold an image or a collection of images or a dictionary of values.
*/

// In the following we will be defining some variables.
var integer = 42;
var float = 42.034;
var boolean = true;

// Note how every line of code ends with a semicolon (;). This is good practice when working with JavaScript.

// String objects start and end with either single quotes or double quotes. Don't mix both ways of writing strings.
var string_single = 'I am a string';
var string_double = "I am also a string";


//Arrays (also called lists) and dictionnaries are special types of variables since they contain more than one value.
//Arrays contain a number of values. Each value can be called upon using the corresponding index. You can loop
//through arrays or easily apply a function to all its elements. Arrays are defined using square brackets.

var list_of_words = ['apple', 'banana', 'cucumber'];
var list_of_ints = [10,6,5,3,9];

// Accessing array items (note that arrrays are 0-indexed i.e. the first element has the index 0).
// Using the print() command, an output is displayed in the console.
print(list_of_words[0]);
print(list_of_ints[2]);

// Arrays containing numeric values allow mathematic operations:
print(list_of_ints[2]+4);
print(list_of_words[0]+"tree")


//Dictionnaries consist of key:value pairs. They are defined using curly brackets. 
//The values can be of any data type while the keys need to be unique (no duplicates allowed).

var dict = {'fruit': 'apple', 
            'color': 'green', 
            'size': 10, 
            'origins': ['DE','NL','IT']};
            
// You can access dictionary values using the corresponding key:
print(dict['color']);

//or using the dot notation:
print(dict.color);

// Dictionnary keys need to be unique. 
// What happens if you add another key named fruit?

var dict = {'fruit': 'apple', 
            'color': 'green', 
            'size': 10, 
            'fruit': 'orange'};
            
print(dict.fruit);

// Functions can be defined as a way to reuse code and make it easier to read
var my_hello_function = function(string) {
  return 'Hello ' + string + '!';
};
print(my_hello_function('world'));

// You can loop through arrays using a map() operation and a function:
var print_num = function(number) {
  print(number);
};

print_num(list_of_ints);
list_of_ints.map(print_num);


