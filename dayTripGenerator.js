let finalDestination;
let finalRestaurant;
let finalTransportationMethod;
let finalEntertainment;


let destination = ["Milwaukee", "Oshkosh", "Atlanta", "Chicago"]

function randomDestination(anArrayOfDestinations){
   let tripDestination = anArrayOfDestinations[Math.floor(Math.random() * anArrayOfDestinations.length)];
    console.log(tripDestination);

    let reSelectDestination = prompt("Would you like a new random destination? if so type yes!");
    if(reSelectDestination == "yes"){
    return randomDestination(destination);
    }
    else{
        return tripDestination;
    }
 

}

finalDestination = randomDestination(destination);



let restaurant = ["Mcdonalds", "Chick-fill-A", "Arbys", "Chipotle"];

function randomRestaurant(anArrayOfRestaurants){
    let tripRestaurant = anArrayOfRestaurants[Math.floor(Math.random () * anArrayOfRestaurants.length)];
    console.log(tripRestaurant);

    let reSelectRestaurant = prompt("Would you like a new random restaurant? if so type yes");
    if(reSelectRestaurant == "yes"){
    return randomRestaurant(restaurant);
    }
    else{
        return tripRestaurant;
}


}

    
finalRestaurant = randomRestaurant(restaurant);
 


let modeOfTransportation = ["Car", "Bus", "Train", "Airplane"];

function randomModeOfTransportation(anArrayOfMethodsOfTransportation){
    let tripTransitionMethod = anArrayOfMethodsOfTransportation[Math.floor(Math.random() * anArrayOfMethodsOfTransportation.length)];
    console.log(tripTransitionMethod);
    
    let reSelectTransportation = prompt("Would you like a new method of transportation? if so type yes")
    if(reSelectTransportation == "yes"){
        return randomModeOfTransportation(modeOfTransportation);
    }
    else{
        return tripTransitionMethod;
    }

}

finalTransportationMethod = randomModeOfTransportation(modeOfTransportation);



let entertainment = ["Movie", "Sports games", "Comedy performance"];

function randomFormOfEntertainment(anArrayOfFormsOfEntertainment){
    let TripEntertainment = anArrayOfFormsOfEntertainment[Math.floor(Math.random() * anArrayOfFormsOfEntertainment.length)];
    console.log(TripEntertainment);

    let reSelectAFormOfEntertainment = prompt("Would you like a new form of entertainment? if so type yes");
    if(reSelectAFormOfEntertainment == "yes"){
        return randomFormOfEntertainment(entertainment);
    }
    else{
        return TripEntertainment;
    }
    

}

finalEntertainment = randomFormOfEntertainment(entertainment);

