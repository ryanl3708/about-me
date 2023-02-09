'use strict';

// get user name
function getName(){
  let userName = prompt("what is your name?");
  alert(`Welcome ${userName}! This is Ryan's About Me introduction page!`);
  alert('Let\'s play a guessing game! Please answer with a (yes/y or no/n)!');
  return userName;
}
// 5 prompt yes no questions

let questionOne = prompt('Am I a student at Code Fellows?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y'){
  alert('You are correct!');
} else if(questionOne === 'no' || questionOne === 'n'){
  alert('Sorry, you are incorrect');
}

let questionTwo = prompt('Am I in Seattle?').toLowerCase();

if(questionTwo === 'yes' || questionTwo === 'y'){
  alert('You are correct!');
} else if(questionTwo === 'no' || questionTwo === 'n'){
  alert('Sorry, you are incorrect');
}

let questionThree = prompt('Do I have a degree in Organic Chemistry?').toLowerCase();

if(questionThree === 'no' || questionThree === 'n'){
  alert('You are correct!');
} else if(questionThree === 'yes' || questionThree === 'y'){
  alert('Sorry, you are incorrect');
}

let questionFour = prompt('Am I a coffee person?').toLowerCase();

if(questionFour === 'yes' || questionFour === 'y'){
  alert('You are correct!');
} else if(questionFour === 'no' || questionFour === 'n'){
  alert('Sorry, you are incorrect');
}

let questionFive = prompt('Do I plan on becoming a programmer?').toLowerCase();

if(questionFive === 'yes' || questionFive === 'y'){
  alert('You are correct!');
} else if(questionFive === 'no' || questionFive === 'n'){
  alert('Sorry, you are incorrect');
}

let myNum = 7;
let chance = 4;
let questionSix = prompt('What number (1~20) am I thinking of?');
let guess = parseInt(questionSix);
while(guess !== myNum && chance > 1){
  if(guess > myNum){
    alert('Your guess is too high!');
  } else if(guess < myNum){
    alert('Your guess is too low!');
  } else if(guess === myNum){
    alert('Great! You are correct!');
  } else {
    alert('What is that input??')
  }
  chance -= 1;
  questionSix = prompt(`what number (1~20) am I thinking of? (You have ${chance} chances!`);
  guess = parseInt(questionSix);
}


let myfruitlist = ['mango', 'apple', 'peach', 'grape', 'cherry'];
let score = 0;

for(let i = 0; i < 6; i++){
  let questionSeven = prompt('guess one of my favorite fruits (type in singular!)').toLowerCase();
  for(let j=0; j < myfruitlist.length; j++){
    if (questionSeven === myfruitlist(j)) {
      alert('You guessed correctly!');
      score += 1;
    } else {
      alert('Wrong. Guess again!');
    }
  }

}

function fruitanswers(){
  let text = 'You got ' + score + ' of my fruits correctly! Here is the list of fruits I like:\n';
  for (let i = 0; i < myfruitlist.length; i++){
    text += myfruitlist[i] + '\n';
  }
  return text;
}

alert(fruitanswers());
// final message
alert(`thank you for playin ${userName}`);

