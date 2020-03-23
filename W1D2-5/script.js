
// Korting 
const age = 18;

if (age >= 18 && age <=25){ 
    console.log("Yes, 50% korting!");
} else if (age < 18 ) { 
    console.log("Sorry, je bent te jong");
} else if ( age > 25){ 
    console.log("Sorry, je bent te oud");
}


// Lucky day 

const name = 'Elvis';

if (name === 'Elvis'){ 
    console.log("Gratis drankje!");
} else { 
    console.log("Sorry, volgende keer beter");
} 

// Jubileum korting

const totalAmount = 30; 

if (totalAmount >= 25 && totalAmount <=50 ){ 
    console.log('Gratis vegaballetjes!');
} else if (totalAmount >= 50 && totalAmount <=100) { 
    console.log('Gratis Nachos!');
} else if (totalAmount >= 100 && totalAmount <=250) { 
    console.log('Champange!');
}