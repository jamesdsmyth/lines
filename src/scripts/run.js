var shape = function() {
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight
  
  // returns the point at a random position in the viewport
  var randomPoints = function() {
    var numbers = {
      x: Math.floor(Math.random() * viewportWidth),
      y: Math.floor(Math.random() * viewportHeight)
    }
  
    return numbers;
  }
  
  var canvas = document.getElementById('container');
  canvas.width = viewportWidth * 2;
  canvas.height = viewportHeight * 2;
  canvas.style.width = viewportWidth + 'px';
  canvas.style.height = viewportHeight + 'px';
  
  var ctx = canvas.getContext('2d');
  ctx.scale(2,2);
  ctx.save();
  
  var newNumbers1 = randomPoints();
  
  ctx.beginPath();
  ctx.moveTo(newNumbers1.x, newNumbers1.y);
  
  ctx.strokeStyle = '#000000';

  var coords = [];
  
  var x = 0;
  while (x < 20) {
  
    var newNumbers2 = randomPoints();
    ctx.lineTo(newNumbers2.x, newNumbers2.y);
    var coordsObject = { x: newNumbers2.x, y: newNumbers2.y }
    coords.push(coordsObject);
    ctx.stroke();
    x++
  }

  console.log(coords);
}

shape();