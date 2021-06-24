let finalDestination;
let finalRestaurant;
let finalTransportationMethod;
let finalEntertainment;
let dayTripComplete;

let destination = ["Milwaukee", "Oshkosh", "Atlanta", "Chicago"];
let restaurant = ["Mcdonalds", "Chick-fill-A", "Arbys", "Chipotle"];
let modeOfTransportation = ["car", "bus", "train", "airplane"];
let entertainment = ["movie", "sports game", "comedy performance"];

let arrayOfOptions = ["Destination", "Restaurant", "Transportation", "Entertainment"]



function generateRandom(anArray){
    let allRandom = anArray[Math.floor(Math.random() * anArray.length)];
    console.log(allRandom);
    return allRandom;
}

finalDestination = generateRandom(destination);
finalRestaurant = generateRandom(restaurant);
finalTransportationMethod = generateRandom(modeOfTransportation);
finalEntertainment = generateRandom(entertainment);




console.log(`Your destination is ${finalDestination}. Your restaurant is ${finalRestaurant}. Your transportation method is ${finalTransportationMethod}. Your form of entertainment is ${finalEntertainment}.`)

chooseNew()


function chooseNew(){
    let dayTripComplete = prompt("is your day trip complete? type in yes or no!")
    if(dayTripComplete.toLowerCase() == "yes"){
        return;
    }
    if(dayTripComplete.toLowerCase() == "no"){
        increase = 1
        for(let i = 0; i < arrayOfOptions.length; i++){
            console.log(`${increase} ${arrayOfOptions[i]}`)
            increase += 1
        }
        userInput = prompt("Please choose from the list of options")
        if(userInput == 1){
            finalDestination = generateRandom(destination);
            console.log(`Your new destination is ${finalDestination}.`)
            self.chooseNew()
        }
        if(userInput == 2){
            finalRestaurant = generateRandom(restaurant);
            console.log(`Your new restaurant is ${finalRestaurant}.`)
            self.chooseNew()

        }
        if(userInput == 3){
            finalTransportationMethod = generateRandom(modeOfTransportation);
            console.log(`Your new transportation method is ${finalTransportationMethod}.`)
            self.chooseNew()

        }
        if(userInput == 4){
            finalEntertainment = generateRandom(entertainment);
            console.log(`Your new entertainment is ${finalEntertainment}.`)
            self.chooseNew()

        }
    }    
}

console.log("I will be going to the city " + finalDestination + " and the restaurant " + finalRestaurant + " by " + finalTransportationMethod + " after I will be going to a " + finalEntertainment +".");


