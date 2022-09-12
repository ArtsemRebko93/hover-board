const board = document.querySelector('#board')
const SQUARES_NUMBER = 660
const colors = ['#DC143C', '#FF1493', '#FF6347', '#FAFAD2', '#DA70D6','#7FFFD4',
                    '#1E90FF','#A0522D','#708090']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor (element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`

}

function getRandomColor (element) {
   const index = Math.floor(Math.random() *colors.length)
   return colors[index]
}