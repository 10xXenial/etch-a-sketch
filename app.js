// x mulltiplied by size of grid = 720
const grid = document.querySelector('.grid')
const newGrisBtn = document.querySelector('#newgrid')
const clearBtn = document.querySelector('.clear')
const rndmGridBtn = document.querySelector('.random')
newGrisBtn.addEventListener('click', () => {
    let newg = prompt("Choose a Grid Size: ")
    let done = false;
    while (done == false) {
    if (newg <= 100) {
        replaceGrid(newg)
        break
    } else {
        alert("Grid size must be less than or equal to 100 to avoid crashing")
        newg = null
        newg = prompt("Choose a grid size: ")
        done = false;

    }
}
})
clearBtn.addEventListener('click', () => {
    clearGrid()
})
rndmGridBtn.addEventListener('click', () => {
    randomGrid()
})
function clearGrid() {
    const toBeC = document.querySelectorAll('.squares')
    toBeC.forEach(function (i) {
        i.style.backgroundColor = 'white'
    })
}
function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  var randomColor=generateRandomColor();//"#F10531"
function randomGrid() {
    const toBeRand = document.querySelectorAll('.squares')
    toBeRand.forEach(function (i) {
        i.style.backgroundColor = generateRandomColor()
    })
}

const gridSizeInHardCode = grid.offsetWidth;
console.log("hi " + gridSizeInHardCode)
function getSquareSize(sOg) {
    size = gridSizeInHardCode / sOg 
    return size
}
function removeGrid() {
    // squares.forEach(function (square) {
    //     console.log(square)
    //     square.remove();
    // })
    const toBeD = document.querySelectorAll('.squares')
    toBeD.forEach(function (i) {
        i.remove()
    })
}
function replaceGrid(newSize) {
    removeGrid()
    drawGrid(newSize)
}
function drawGrid(gridSize) {
    const squareSize = getSquareSize(gridSize);
    gridSize =  gridSize ** 2
    for (let i = 0; i < gridSize; i++) {
        const squares = document.createElement('div')
        squares.classList.add('squares')
        squares.style.width = squareSize + "px"
        squares.style.height = squareSize + "px"
        grid.append(squares)
    }
    const squares = document.querySelectorAll('.squares')
    squares.forEach(function (i) {
        i.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = "#FF06B7"
        }
        )
        }
    
    )
}
let fir = prompt("Choose a grid size: ")
let done = false;
    while (done == false) {
    if (fir <= 100) {
        drawGrid(fir)
        break
    } else {
        alert("Grid size must be less than or equal to 100 to avoid crashing")
        fir = null
        fir = prompt("Choose a grid size: ")
        done = false;

    }
}





// squares.forEach(function (i) {
//         i.addEventListener('mouseover', function (e) {
//         e.target.style.backgroundColor = "black"
//         }
//         )
//         }
    
//     )

