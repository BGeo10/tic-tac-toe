// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var currentShape = "circle"
function SquareChange() {
  var canvas = document.getElementById("game-board")
    if (currentShape == "circle") {
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 63)
      circle.setAttribute("cy", 63)
      circle.setAttribute("r", 20)
      circle.setAttribute("fill", "blue")
      canvas.appendChild(circle)
      currentShape = "line"
    } else {
      var line = document.createElementNS(namespace, "line")
      line.setAttribute("x1", 25)
      line.setAttribute("y1", 50)
      line.setAttribute("x2", 75)
      line.setAttribute("y2", 100)
      line.setAttribute("stroke-width", 10)
      line.setAttribute("stroke", "purple")
      canvas.appendChild(line)
      currentShape = "circle"
    }
}
