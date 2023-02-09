'use strict';

// get user name
function getName(){
  let userName = prompt("what is your name?");
  alert(`Welcome ${userName}! This is Ryan's About Me introduction page!`);
  alert('Let\'s play a guessing game! Please answer with a (yes/y or no/n)!');
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
while(guess !== myNum && chance > 0){
  if(guess > myNum){
    alert('Your guess is too high!');
  } else{
    alert('Your guess is too low!');
  }
  chance -= 1;
  questionSix = prompt(`what number (1~20) am I thinking of? (You have ${chance} chances!`);
}



// final message
alert(`thank you for playin ${userName}`);

