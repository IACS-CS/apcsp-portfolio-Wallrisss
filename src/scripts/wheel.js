import {Wheel} from 'https://cdn.jsdelivr.net/npm/spin-wheel@5.0.2/dist/spin-wheel-esm.js';

export function createWheel() {
  let firstRest = true;
  function onRest (e) {
    if (firstRest) { 
      firstRest = false;
      return;
    }
    console.log('onrest',e);
    let currentIndex = e.currentIndex;
    if (currentIndex === 0) {
      window.location.hash = '#/';      
    } else if (currentIndex === 1) {
      window.location.hash = '#/binary-search';      
    } else if (currentIndex === 2) {
      window.location.hash = '#/citations';      
    } else {
      window.location.hash = '#/';            
    }
  }

    // 1. Configure the wheel's properties:
  const props = {items: [
      {
        label: 'main',
      },
      {
        label: 'binary search',
      },
      {
        label: 'citations',
      },
    ],
    width: 800,
    itemLabelFontSizeMax: 40,
    itemLabelRadius: 0.95,
    isInteractive: false,
    rotation: 0,
    rotationResistance: -50,
    onRest,
  }

  // 2. Decide where you want it to go:
  const container = document.querySelector('#wheel');



  // 3. Create the wheel in the container and initialise it with the props:
  const wheel = new Wheel(container, props);

    
  wheel.spin();
  const button = document.querySelector('#spin-btn');
  console.log('found wehel',wheel,button)
  if (button) {
  button.addEventListener('click', () => {
 
    wheel.spin(250);
  });

  }
  return wheel;
}