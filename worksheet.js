let dayOfWeek = "Monday";
console.log(dayOfWeek)

dayOfWeek = 'Friday'
console.log("I can't wait for " + dayOfWeek + "!")

////Create variable named animalInput
let animalInput = prompt("What is your favorite animal?")

////Create variable named colorInput
let colorInput = prompt('What is your favorite color?')

//Combine these two variables within a string so you can print the phrase
//"Ive never seen a <color><animal>!"
console.log("I've never seen a " + colorInput + animalInput + "!")
///
///
///Create variable named timeOfDay with value = 1300
let timeOfDay = (1700) //array)
// Create another variable, self named. This variable will hold the value
// of one of the meals you have previously chosen. 
let choices = ['Eggs', 'Sandwich', 'Steak']
let choice = ''
if (timeOfDay <= 1200) {
    choice = 'Eggs'
}
else if (timeOfDay >= 1700) {
    
    choice = 'Steak'
}
else if (timeOfDay > 1200 <= 1700) {

    choice = 'Sandwich'
}
console.log(choice)

randomNumber = Math.floor(Math.random() * 11)
//while (randomNumber != 10) {
    if (randomNumber >= 0 <= 2) {
        console.log('Beatles')
    }
    else if (randomNumber >= 3 <= 5) {
        console.log('Stones')
    }
    else if (randomNumber >= 6 <= 8) {
        console.log('Floyd')
    }
    else if (randomNumber >= 9 <= 10) {
        console.log('Hendrix')
    }

//}

for (let i = 1; i < 8; i++){
    console.log('JavaScript is cool!');
}