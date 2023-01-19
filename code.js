
createBoard()

function createBoard() {

    const loopTime = 160;

    for (let i = 0; i < loopTime; i++) {
        createSquare()
        console.log(`Iteration is #${i}`);
    }




}

function createSquare() {
    // // 1. element creation 
    var squareChild = document.createElement('div');
    squareChild.classList.add('squareblock');
    squareChild.style.height = '43px';
    squareChild.style.width = '43px';
    squareChild.style.backgroundColor = 'white';
    squareChild.style.border = '1px solid black';
    squareChild.style.flex = "auto"




    // // 2. parent node
    const parentNode = document.querySelector('.board')
    parentNode.appendChild(squareChild)
}



