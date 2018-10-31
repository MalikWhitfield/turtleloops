console.log('hello, testing, does it work?')

let characters = [{  //make sure we have the exact same type of data in that array//
  id: 44,
  name: 'Leo',
  favColor: 'blue',
  favFood: 'pizza',
}, {
  id: 687,
  name: 'Mikey',
  favColor: 'orange',
  favFood: 'pizza',
  img: '//placehold.it/200x200'
}, {
  id: 55,
  name: 'Donny',
  favColor: 'purple',
  favFood: 'pizza',
  img: '//placehold.it/200x200'
}, {
  id: 77,
  name: 'Raffy',
  favColor: 'purple',
  favFood: 'pizza',
  img: '//placehold.it/200x200'
}, {
  id: 87,
  name: 'Shredder',
  favColor: 'brown',
  favFood: 'trash00',
  img: '//placehold.it/200x200'
}, {
  id: 99,
  name: 'Splinter',
  favColor: 'green',
  favFood: 'Turtle Soup',
  img: '//placehold.it/200x200'
}
]  // now we want to create buttons for each object in our array, and we also want to print out every character in our array, by creating a loop
// let mikey = characters[1]

let position = 0

while (position < characters.length) {
  console.log(characters[position].name)
  position = position + 1 //same thing as position ++, we changed it to characters[position].name because before, with just characters, it printed the entire array
  // *** if you ever see message "cannot read property ..." it is because the thing above it is undefined/doesn't exist
}
// loops are BLOCKING. which means while the loop is running, the user can't do anything
//DOM stands for Document Object Model, a way for JavaScript to interact with html. Can retireve an element from the page, off of its ID
let appElem = document.getElementById("app")
let charactersTemplate = ''
console.log('this is where the loop starts')
for (let i = 0; i < characters.length; i++) {// for loops won't even run unless they have those 3 parts. 'i' is the positon, stands for itterating. can do everything a while loop can do
  let character = characters[i] // <-- **THIS LINE OF CODE WILL ALMOST ALWAYS BE IN YOUR FOR LOOPS
  charactersTemplate += `
    <div class="character">
      <button onclick="drawCharacterInfo(${character.id})">${character.name}</button>
    </div> 
  `
}// to make them all buttons, change the outcome to something unique
appElem.innerHTML = charactersTemplate
console.log('this is where the loop ends')

function drawCharacterInfo(id) {
  console.log('do I have the id: ', id)
  let character = characters.find(character => character.id == id) //can use the very first letter of character after the lamda =>
  document.getElementById('character-info').innerHTML = `
  <div class="character-info" style="color:${character.favColor}">
  <p> <img src="${character.img}"> Hello, my name is ${character.name} my favorite food is ${character.favFood}
  
  `
}

