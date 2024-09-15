// Select elements from the DOM
const squareContainer = document.querySelector('.container');
const resetButton = document.querySelector('.resetGrid');
const slider = document.querySelector('#gridsize');
const gridValue = document.querySelector('#gridvalue');

// Function to create a grid of squares based on the given size
const makeGrid = (size) => {
    squareContainer.innerHTML = ''; // Clear existing grid
    squareContainer.style.width = '640px';
    squareContainer.style.height = '640px';

    const newSquaresFragment = document.createDocumentFragment(); // Create a fragment to hold squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.flex = `0 0 calc(100% / ${size})`; 
        square.style.height = `calc(100% / ${size})`;
        newSquaresFragment.appendChild(square);
    }

    // Append the created squares to the container
    squareContainer.appendChild(newSquaresFragment);
    addHoverEffect();
};

// Function to generate a random color
const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Adds a hover effect to each square
const addHoverEffect = () => {
    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
        });
    });
};

// Event listener for the reset button to change grid size
resetButton.addEventListener('click', () => {
    const size = parseInt(prompt("Enter new grid size between 1 and 100"));
    if (size >= 1 && size <= 100) {
        makeGrid(size);
        slider.value = size;
        gridValue.textContent = size;
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

// Event listener for the slider input to change grid size
slider.addEventListener('input', (e) => {
    const size = e.target.value;
    gridValue.textContent = size;
    makeGrid(size);
});

// Initialize grid with default size
makeGrid(16);
