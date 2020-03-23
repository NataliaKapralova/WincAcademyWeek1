// While Loop 
 const collors = ['Green', 'Yellow', 'Red', "Blue"]; 
let i = 0
while  (i <collors.length) {
    console.log(`${collors[i]}`); 
    i++ 
} 

// For loop 
const collor = ['Green', 'Yellow', 'Red', 'Blue']; 

for(let i = 0; i < collor.length; i++){ 
    console.log(collor[i]); 
}

// Foreach

const kleur = ['Green', 'Yellow', 'Red', 'Blue']; 

kleur.forEach( kleur => { 
    console.log(kleur)
});


// For loop neemt in totaal 2 regels in beslag. 
// Foreach loop neemt in totaal ook regels in beslag maar is veel makkelijker toe te passen. 
// De foreach loop vind ik makkelijker te schrijven. Dit doordat de code kort en overzichtelijk is ten opzichte van de for en while loop. 
// While loop heb ik lang vast gehangen, terwijl de foreach loop in een keer gelukt was. 

 
const user = { 
    name: "Natalia",
    age: 21,
    living: "Nijmegen",
    married: false,
}

const keys = Object.keys(user)

for ( const key of keys){ 
    console.log(key)
}


// Ik ben hierboven aan het itereren omdat ik 'loop' door mijn object en daarvan de 'keys' selecteer en console. 