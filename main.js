
const nav = document.querySelector('#navbar');
const shuffle = document.querySelector('#shuffle');
const home = document.querySelector('#home');
const bio = document.querySelector('#bio');
const storyButton = document.querySelector('#storyButton');
const storyParagraph = document.querySelector('#storyParagraph');
const work = document.querySelector('#work');

function shuffleColors(){
  let firstColor = Math.floor(Math.random * 3) + 1;
  const colorArray = ['#3ad150', '#008080', '#ffffff', '#C8F7C5'];
  for (let i = colorArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colorArray[i], colorArray[j]] = [colorArray[j], colorArray[i]];
  }
  console.log(colorArray[0]);
  nav.style.backgroundColor = colorArray[0];
  home.style.backgroundColor = colorArray[1];
  bio.style.backgroundColor = colorArray[2];
  work.style.backgroundColor = colorArray[3];
}

shuffle.addEventListener('click', shuffleColors);

storyParagraph.style.display = 'none';


storyButton.addEventListener('click', () => {
  if(storyParagraph.style.display === 'none'){
    storyParagraph.style.display = 'block';
  } else {
    storyParagraph.style.display = 'none';
  }
})
