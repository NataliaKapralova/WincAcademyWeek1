// Function-teller 


function tellFortune(jobTitle, Location, partner, kids) {
    const future = 'You will be a ' + jobTitle + ' in ' + Location + ' and married to ' +
   partner + ' ' + ' with ' + kids + ' kids.';
   
   console.log(future);
}

tellFortune('developer', 'nl', 'Rory', 2);
tellFortune('gym-teacher', 'us', 'Mary', 4);
tellFortune('pizza-baker', 'la', 'Noa', 3)