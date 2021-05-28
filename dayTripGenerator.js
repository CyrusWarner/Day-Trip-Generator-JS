let destination = ["Milwaukee", "Oshkosh", "Atlanta", "Chicago"]

function randomDestination(anArrayOfDestinations){
   let tripDestination = anArrayOfDestinations[Math.floor(Math.random() * anArrayOfDestinations.length)];
    console.log(tripDestination);


}

let finalDestination = randomDestination(destination);