import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

const background = <img
  className = 'background'
  alt = 'ocean'
  src = '/images/ocean.jpg'
 />;

let images = [];
for (let animal in animals) {
  images.push(<img
      key = {animal}
      className = 'animal'
      alt = {animal}
      src = {animals[animal].image}
      aria-label = {animal}
      role = 'button'
      onClick = {displayFact}
     />)
}

//왜 arrow function으로 하면 안되징..?
function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const randomIndex = Math.floor(Math.random() * animalInfo.facts.length)
  const funFact = animalInfo.facts[randomIndex];
  document.getElementById('fact').innerHTML = funFact;
}

const showBackGround = true;

const animalFacts = (
  <div>
    <h1>
      {title === '' ? 'Click an animal for a fun fact' : title}
    </h1>
    {showBackGround && background}
    <p id = 'fact'></p>
    <div className = 'animals'>
      {images}
    </div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));