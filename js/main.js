//Default fetch template
//function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }
//Lets write some pseudocode on what we need to implement to get this project to work.
//We will be working with this API url, https://jservice.io/api/category?id=54, which will fetch a response object containing an array of clues, which each are questions and their answers.
//our fetch will look something like this
// fetch('https://jservice.io/api/category?id=54')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.log(error);
//   })
//Each clue will contain an answer property and question property, which will what we need to access and output on our dom elements.
//Each time our Test knowledge button is pressed,
//we need to update the new question to our question p, and update the answer while also hiding the answer until the user presses the get answer button.
//Lets create our fetch function, and make it modular so we can fetch any category, while making the default category whales for this website.
//Lets first grab all the DOM elements we will be using.
const generateQuestionButton = document.querySelector('.button_generate');
const retrieveAnswerButton = document.querySelector('.button_answer');
const questionP = document.querySelector('#question');
const answerP = document.querySelector('#answer');

//Function to initialize event listeners
function initializeEventListener(target, event, func) {
  target.addEventListener(event, func)
}

//Lets initialize a click event to our retrieveAnswerButton to show the answerP when clicked.
initializeEventListener(retrieveAnswerButton, 'click', () => answerP.style = 'display: block;')

//Immediately calling our fetch once the page has loaded.
getClues();
function getClues(id = '54') {
  const url = `https://jservice.io/api/category?id=${id}`;
  console.log(url);
  fetch(url)
    .then(res => {
      if (res.ok) {
        console.log('Successful Fetch');
      } else {
        console.log('Unsuccessful Fetch');
      }
      return res.json()
    })
    .then(data => {
      return data.clues;
    })
    .then(clues => {
      //now we can set click events to generate a random question/answer
      console.log(clues);
      initializeEventListener(generateQuestionButton, 'click', () => {
        console.log(clues);
        answerP.style = 'display: none';
        const randomClue = getRandomNumber(clues.length);
        const {question, answer} = clues[randomClue];
        //Here we are applying the current clue's question/answer to our DOM, while deleting the current clue from the clues array.
        applyQuestionAndAnswer(question, answer);
        clues.splice(randomClue, 1);
        if (clues.length === 0) {
          applyEndOfGame();
        }
      })
    })
    .catch(error => console.log(error));
}

//A function to get a random number from a range. Applying Math.floor() because we will be using this to pick a random clue based on the index.
function getRandomNumber(rangeNum) {
  return Math.floor(Math.random() * rangeNum);
}

//function to apply the current question/answer
function applyQuestionAndAnswer(question, answer) {
  questionP.innerText = question;
  answerP.innerText = answer;
}

//function to apply end of game text when the user has gone through all the trivia questions.
function applyEndOfGame() {
  questionP.innerText = 'Thanks for Playing!';
  answerP.innerText = null;
  generateQuestionButton.style = 'display: none';
  retrieveAnswerButton.style = 'display: none;'
} 

