// Deel A 



// Broodje Kaas from holland 
// Take the bread
// Add cheese to the bread
// Serve 

const broodjeKaas = function ()  {
	console.log("Take the bread");
	console.log("Add cheese to the bread");
	console.log("Serve"); 
};

broodjeKaas();

// Deel B 


const makeSandwich = function (topping) {
	console.log("Take the bread");
	console.log("Add " + topping );
	console.log("There you go, a sandwich with... " + topping);
};
 
makeSandwich('ham');
makeSandwich('chicken');


//Deel C 

const calculateDiscountedPrice = function(min, max) {
    return Math.round(max - min);
  }
  console.log(calculateDiscountedPrice(max-min));


  // Deel D
  
  const DiscountedPrice = function(bedrag, korting) {
    return Math.round(bedrag- korting);
  }
  const DiscountedPriceClone = function(bedrag, korting) {
  if(bedrag> 25) {
   return Math.round(bedrag- korting);
      
  } else {
    return bedrag;
    }
  }
  console.log(DiscountedPrice(bedrag-korting));




