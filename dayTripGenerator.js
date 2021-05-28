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