let destination = ["Milwaukee", "Oshkosh", "Atlanta", "Chicago"]

function randomDestination(anArrayOfDestinations){
   let tripDestination = anArrayOfDestinations[Math.floor(Math.random() * anArrayOfDestinations.length)];
    console.log(tripDestination);
    return tripDestination;


}

let finalDestination = randomDestination(destination);



let restaurant = ["Mcdonalds", "Chick-fill-A", "Arbys", "Chipotle"];

function randomRestaurant(anArrayOfRestaurants){
    let tripRestaurant = anArrayOfRestaurants[Math.floor(Math.random () * anArrayOfRestaurants.length)];
    console.log(tripRestaurant);
    return tripRestaurant;

}

let finalRestaurant = randomRestaurant(restaurant);



let modeOfTransportation = ["Car", "Train", "Airplane"];

function randomModeOfTransportation(anArrayOfMethodsOfTransportation){
    let tripTransitionMethod = anArrayOfMethodsOfTransportation[Math.floor(Math.random() * anArrayOfMethodsOfTransportation.length)];
    console.log(tripTransitionMethod);
    return tripTransitionMethod;

}

let finalTransportationMethod = randomModeOfTransportation(modeOfTransportation);



let entertainment = ["Movie", "Sports games", "Comedy performance"];

function randomFormOfEntertainment(anArrayOfFormsOfEntertainment){
    let TripEntertainment = anArrayOfFormsOfEntertainment[Math.floor(Math.random() * anArrayOfFormsOfEntertainment.length)];
    console.log(TripEntertainment);
    return TripEntertainment;

}

let finalEntertainment = randomFormOfEntertainment(entertainment);