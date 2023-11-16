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
const generateButton = document.querySelector('.button_generate');
const questionP = document.querySelector('#question');
const answerP = document.querySelector('#answer');

function getClues(id = '54') {
  let clues;
  const url = `https://jservice.io/api/category?id=${id}`;
  console.log(url);
  
  fetch(url)
  .then(response => response.json())
  .then(data => clues = data.clues)
  .then(error => console.log(error))
  return clues;
}
//Here our clues variable will hold the array of clues.
clues = getClues();
//we can now create a function to use within an event listener for the Test your knowledge button, which will 


