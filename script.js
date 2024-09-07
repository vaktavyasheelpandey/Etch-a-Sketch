const container = document.getElementById('grid');
const newGridButton = document.getElementById('newGridButton');
const clearButton = document.getElementById('clearButton');
const dataButton = document.getElementById('dataButton');
let currentColor = 'black';

// Color buttons
const blackButton = document.getElementById('black');
const redButton = document.getElementById('red');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const rainbowButton = document.getElementById('rainbow');

// Function to create the grid
function createGrid(size) {
  container.innerHTML = '';  // Clear existing grid
  container.style.gridTemplateColumns = 'repeat(${size}, 1fr)';
  container.style.gridTemplateRows = 'repeat(${size}, 1fr)';

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    
    // Change color on hover
    gridItem.addEventListener('mouseover', () => {
      gridItem.style.backgroundColor = currentColor === 'rainbow' ? getRandomColor() : currentColor;
    });
    
    container.appendChild(gridItem);
  }
}

// Function to generate a random color for the rainbow effect
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener for the "New Grid" button
newGridButton.addEventListener('click', () => {
  let size = parseInt(prompt('Enter number of squares per side (maximum 100):'));
  if (size && size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
});

// Clear grid button functionality
clearButton.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => item.style.backgroundColor = 'white');
});

// Show data: count colored cells
dataButton.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  let coloredCount = 0;

  gridItems.forEach(item => {
    const bgColor = item.style.backgroundColor;
    if (bgColor && bgColor !== 'white') {
      coloredCount++;
    }
  });

  alert('There are ${coloredCount} colored squares.');
});

// Color change functionality
blackButton.addEventListener('click', () => currentColor = 'black');
redButton.addEventListener('click', () => currentColor = 'red');
greenButton.addEventListener('click', () => currentColor = 'green');
blueButton.addEventListener('click', () => currentColor = 'blue');
rainbowButton.addEventListener('click', () => currentColor = 'rainbow');

// Initialize default grid
createGrid(16);