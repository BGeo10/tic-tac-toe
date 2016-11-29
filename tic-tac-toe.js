// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var turn="Player1"
var topleftClicked = 0
function SquareClick() {
  var canvas = document.getElementById("game-board")
  if(topleftClicked == 0) {
     if (turn == "Player1") {
       var circle = document.createElementNS(namespace, "circle")
       circle.setAttribute("cx", 50)
       circle.setAttribute("cy", 60)
       circle.setAttribute("r", 20)
       circle.setAttribute("fill", "blue")
       canvas.appendChild(circle)
       topleftClicked = 1
       turn="Player2"
    } else {
      var rect = document.createElementNS(namespace, "rect")
      rect.setAttribute("x", 30)
      rect.setAttribute("y", 40)
      rect.setAttribute("height", 40)
      rect.setAttribute("width", 40)
      rect.setAttribute("fill", "red")
      canvas.appendChild(rect)
      turn="Player1"
      topleftClicked = 1
    }
  }
}

var topmiddleClicked = 0
function SquareClick2() {
  var canvas = document.getElementById("game-board")
  if(topmiddleClicked == 0) {
     if (turn == "Player1") {
       var circle = document.createElementNS(namespace, "circle")
       circle.setAttribute("cx", 150)
       circle.setAttribute("cy", 60)
       circle.setAttribute("r", 20)
       circle.setAttribute("fill", "blue")
       canvas.appendChild(circle)
       topmiddleClicked = 1
       turn="Player2"
    } else {
      var rect = document.createElementNS(namespace, "rect")
      rect.setAttribute("x", 130)
      rect.setAttribute("y", 40)
      rect.setAttribute("height", 40)
      rect.setAttribute("width", 40)
      rect.setAttribute("fill", "red")
      canvas.appendChild(rect)
      turn="Player1"
      topmiddleClicked = 1
    }
  }
}

var toprightClicked = 0
function SquareClick3() {
  var canvas = document.getElementById("game-board")
  if(toprightClicked == 0) {
     if (turn == "Player1") {
       var circle = document.createElementNS(namespace, "circle")
       circle.setAttribute("cx", 250)
       circle.setAttribute("cy", 60)
       circle.setAttribute("r", 20)
       circle.setAttribute("fill", "blue")
       canvas.appendChild(circle)
       toprightClicked = 1
       turn="Player2"
    } else {
      var rect = document.createElementNS(namespace, "rect")
      rect.setAttribute("x", 230)
      rect.setAttribute("y", 40)
      rect.setAttribute("height", 40)
      rect.setAttribute("width", 40)
      rect.setAttribute("fill", "red")
      canvas.appendChild(rect)
      turn="Player1"
      toprightClicked = 1
    }
  }
}

var middleleftClicked = 0
function SquareClick4() {
  var canvas = document.getElementById("game-board")
  if(middleleftClicked == 0) {
     if (turn == "Player1") {
       var circle = document.createElementNS(namespace, "circle")
       circle.setAttribute("cx", 50)
       circle.setAttribute("cy", 160)
       circle.setAttribute("r", 20)
       circle.setAttribute("fill", "blue")
       canvas.appendChild(circle)
       middleleftClicked = 1
       turn="Player2"
    } else {
      var rect = document.createElementNS(namespace, "rect")
      rect.setAttribute("x", 30)
      rect.setAttribute("y", 140)
      rect.setAttribute("height", 40)
      rect.setAttribute("width", 40)
      rect.setAttribute("fill", "red")
      canvas.appendChild(rect)
      turn="Player1"
      middleleftClicked = 1
    }
  }
}

var centermiddleClicked = 0
function SquareClick5() {
  var canvas = document.getElementById("game-board")
  if(centermiddleClicked == 0) {
     if (turn == "Player1") {
       var circle = document.createElementNS(namespace, "circle")
       circle.setAttribute("cx", 150)
       circle.setAttribute("cy", 160)
       circle.setAttribute("r", 20)
       circle.setAttribute("fill", "blue")
       canvas.appendChild(circle)
       centermiddleClicked = 1
       turn="Player2"
    } else {
      var rect = document.createElementNS(namespace, "rect")
      rect.setAttribute("x", 130)
      rect.setAttribute("y", 140)
      rect.setAttribute("height", 40)
      rect.setAttribute("width", 40)
      rect.setAttribute("fill", "red")
      canvas.appendChild(rect)
      turn="Player1"
      centermiddleClicked = 1
    }
  }
}

var middlerightClicked = 0
function SquareClick6() {
  var canvas = document.getElementById("game-board")
  if(middlerightClicked == 0) {
     if (turn == "Player1") {
       var circle = document.createElementNS(namespace, "circle")
       circle.setAttribute("cx", 250)
       circle.setAttribute("cy", 160)
       circle.setAttribute("r", 20)
       circle.setAttribute("fill", "blue")
       canvas.appendChild(circle)
       middlerightClicked = 1
       turn="Player2"
    } else {
      var rect = document.createElementNS(namespace, "rect")
      rect.setAttribute("x", 230)
      rect.setAttribute("y", 140)
      rect.setAttribute("height", 40)
      rect.setAttribute("width", 40)
      rect.setAttribute("fill", "red")
      canvas.appendChild(rect)
      turn="Player1"
      middlerightClicked = 1
    }
  }
}

var bottomleftClicked = 0
function SquareClick7() {
  var canvas = document.getElementById("game-board")
  if(bottomleftClicked == 0) {
     if (turn == "Player1") {
       var circle = document.createElementNS(namespace, "circle")
       circle.setAttribute("cx", 50)
       circle.setAttribute("cy", 260)
       circle.setAttribute("r", 20)
       circle.setAttribute("fill", "blue")
       canvas.appendChild(circle)
       bottomleftClicked = 1
       turn="Player2"
    } else {
      var rect = document.createElementNS(namespace, "rect")
      rect.setAttribute("x", 30)
      rect.setAttribute("y", 240)
      rect.setAttribute("height", 40)
      rect.setAttribute("width", 40)
      rect.setAttribute("fill", "red")
      canvas.appendChild(rect)
      turn="Player1"
      bottomleftClicked = 1
    }
  }
}

var bottommiddleClicked = 0
function SquareClick8() {
  var canvas = document.getElementById("game-board")
  if(bottommiddleClicked == 0) {
     if (turn == "Player1") {
       var circle = document.createElementNS(namespace, "circle")
       circle.setAttribute("cx", 150)
       circle.setAttribute("cy", 260)
       circle.setAttribute("r", 20)
       circle.setAttribute("fill", "blue")
       canvas.appendChild(circle)
       bottommiddleClicked = 1
       turn="Player2"
    } else {
      var rect = document.createElementNS(namespace, "rect")
      rect.setAttribute("x", 130)
      rect.setAttribute("y", 240)
      rect.setAttribute("height", 40)
      rect.setAttribute("width", 40)
      rect.setAttribute("fill", "red")
      canvas.appendChild(rect)
      turn="Player1"
      bottommiddleClicked = 1
    }
  }
}

var bottomrightClicked = 0
function SquareClick9() {
  var canvas = document.getElementById("game-board")
  if(bottomrightClicked == 0) {
     if (turn == "Player1") {
       var circle = document.createElementNS(namespace, "circle")
       circle.setAttribute("cx", 250)
       circle.setAttribute("cy", 260)
       circle.setAttribute("r", 20)
       circle.setAttribute("fill", "blue")
       canvas.appendChild(circle)
       bottomrightClicked = 1
       turn="Player2"
    } else {
      var rect = document.createElementNS(namespace, "rect")
      rect.setAttribute("x", 230)
      rect.setAttribute("y", 240)
      rect.setAttribute("height", 40)
      rect.setAttribute("width", 40)
      rect.setAttribute("fill", "red")
      canvas.appendChild(rect)
      turn="Player1"
      bottomrightClicked = 1
    }
  }
}
