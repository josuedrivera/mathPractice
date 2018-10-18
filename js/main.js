console.log("connected");


// Math() objects 

// rounds number inside paranthesis to nearest whole integer
// Math.round()

// rounds number inside paranthesis up to the next whole integer
// Math.ceil()

// rounds number inside paranthesis down to the next lowest integer
// Math.floor()

// does not take an argument, does not need one. Will generate a random number
// these numbers are less than 1 and greater than 0; or BETWEEN 0 and 1
// does not include 0 or 1
// Math.random()

// to generate a whole number using Math() methods
// Math.round(Math.random() * 10) 
	// --> this will give you a zero; the range is not defined

// Math.round((Math.random() * 10) +1) 
	// --> will set range so you do not get a zero; but 11 was added to the range inadvertantly 

// Math.floor((Math.random() * 10) +1) 
	// --> will set range from 1 to 10

// think of the range
// 	what is the lowest number possible
// 	what is the highest number possible



// to generate random number and set a range properly use
	// min and max included
Math.floor(Math.random() * (max - min + 1) + min); 

// example for range 50 - 100
// Math.floor(Math.random() * (100 - 50 + 1) + 50);

// this is useful for shuffle feature

// to generate random number and set a range properly use
	// min excluded 
	// max included
Math.ceil(Math.random()*(max - min)) + min;


// instead of console.log() this can be used to display results on page instead of console
document.body.innerHTML += "<h1>" + (Math.random()*200) + "</h1>";



