var words = ['apple', 'beach', 'chair', 'dance', 'earth', 'fence', 'grape', 'haste', 'image', 'jelly', 'knees', 'lamps', 'mango', 'nurse', 'ocean'];

var randomWord = words[Math.floor(Math.random() * words.length)];

var gameIsOver = false;

var textBox = document.getElementById("textBox");

var submitButton = document.getElementById("submit");

//var blankWordInitial = "_ _ _ _"

console.log(randomWord)

function checkGuess() {
    var word = document.getElementById('textBox').value.toString()

    var wordToComare = removeSpaces(randomWord)


    for(var i = 0; i < word.length; i++) {
        const char = word[i]
        if (wordToComare.includes(char)) {
            //Letter is included and needs to be added
            letterIsIncluded(char)
        } else {
            letterIsNotIncluded(char)
            //Letter is not included and needs to be added to failed guesses
        }
    }
    
 };

 function letterIsIncluded(character) {
    var char = character
    //Get reference to current word status 
    var currentWord = document.getElementById('word-lines').innerHTML
    
    //Get a copy that removes spaces 
    currentWord = removeSpaces(currentWord)

    //Iterate through, if randomWord[i] == char and currentWord[i] == _, change it to char 

    for(var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == char) {
            currentWord[i] = char
        } else {
            continue
        }
    }

    //Separate with a space 
    // console.log(currentWord)
     currentWord = addSpaces(currentWord)
    // console.log(currentWord)
     document.getElementById("word-lines").innerHTML = currentWord

 }

 function letterIsNotIncluded(character) {

 }

 function removeSpaces(str) {
    if (typeof str == 'string') {
        return str.split(' ').join('')
    } else {
        console.log("Not a string")
    }
    
 }
 function addSpaces(str) {
    if (typeof str == "string") {
        return str.split('').join(' ');
    }
    
  }

 
submitButton.addEventListener('click', checkGuess);


