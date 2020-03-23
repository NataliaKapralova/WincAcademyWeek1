const calculateSupply = function(age, numPerDay){
    
const maxAge = 100;
const totalNeeded = (numPerDay * 365) * (maxAge - age);


console.log('You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge);

};

calculateSupply(2, 21)
calculateSupply(42, 91)
calculateSupply(72, 31)