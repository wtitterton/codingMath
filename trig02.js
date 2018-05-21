document.addEventListener("DOMContentLoaded", function(event) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;

  var centerY = height * .5, // center in screen
  centerX = width * .5, // center on x axis
  baseRadius = 100,
  offset = 50, // dictates the extremeties of the animation eg how far it moves on the y axis
  speed = 0.1, //  how quick it moves from  1 to -1
  angle = 0;

  render();

  function render()
  {
    var radius = baseRadius + Math.sin(angle) * offset;
    ctx.clearRect(0, 0,width, height);
    ctx.beginPath();
    ctx.arc(centerX, centerY,radius, 0, Math.PI * 2, false);
    ctx.fill();
    angle += speed;

    requestAnimationFrame(render);
  }


});
