
//declaring dom elements variables
const nav = document.querySelector('#navbar');
const shuffle = document.querySelector('#shuffle');
const home = document.querySelector('#home');
const bio = document.querySelector('#bio');
const storyButton = document.querySelector('#storyButton');
const storyParagraph = document.querySelector('#storyParagraph');
const work = document.querySelector('#work');

//this function randomly assigns the three colors used in the webpage to the four areas of the website
function shuffleColors(){
  let firstColor = Math.floor(Math.random * 3) + 1;
  const colorArray = ['#3ad150', '#008080', '#ffffff', '#C8F7C5'];
  for (let i = colorArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colorArray[i], colorArray[j]] = [colorArray[j], colorArray[i]];
  }
  nav.style.backgroundColor = colorArray[0];
  home.style.backgroundColor = colorArray[1];
  bio.style.backgroundColor = colorArray[2];
  work.style.backgroundColor = colorArray[3];
}

//when the shuffle button is clicked the shuffleColors function is executed
shuffle.addEventListener('click', shuffleColors);

//by default the storyParagraph is hidden, click the show button to display it
storyParagraph.style.display = 'none';


storyButton.addEventListener('click', () => {
  if(storyParagraph.style.display === 'none'){
    storyButton.textContent = 'Hide';
    storyParagraph.style.display = '';
  } else {
    storyButton.textContent = 'Show';
    storyParagraph.style.display = 'none';
  }
})
