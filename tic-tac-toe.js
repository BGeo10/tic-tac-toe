// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var topleftClicked = 0
function SquareClick() {
  var canvas = document.getElementById("game-board")
  if (topleftClicked == 0) {
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 62)
    circle.setAttribute("cy", 63)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill", "blue")
    canvas.appendChild(circle)
    topleftClicked = 1
  }
}

var topmiddleClicked = 0
function SquareClick2() {
  var canvas = document.getElementById("game-board")
  if (topmiddleClicked == 0) {
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 162)
    circle.setAttribute("cy", 63)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill", "blue")
    canvas.appendChild(circle)
    topmiddleClicked = 1
  }
}

var toprightClicked = 0
function SquareClick3() {
  var canvas = document.getElementById("game-board")
  if (toprightClicked == 0) {
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 262)
    circle.setAttribute("cy", 63)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill", "blue")
    canvas.appendChild(circle)
    toprightClicked = 1
  }
}
