document.addEventListener("DOMContentLoaded", function(event) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;
  ctx.translate(0,height / 2);
  ctx.scale(1,-1);
  // PI * 2 = 360 deg or 6.28 radians
  for(var angle = 0; angle < Math.PI * 2; angle += .01)
  {
    // sin wave
    var x = angle * 200;
    var y = Math.sin(angle) * 200;
    ctx.fillStyle = "#000";
    ctx.fillRect(x,y,5,5 );
    //cos sign eave
    var x = angle * 200;
    var y = Math.cos(angle) * 200;
    ctx.fillStyle = "tomato";
    ctx.fillRect(x,y,5,5 );
    //atan wave
    var x = angle * 200;
    var y = Math.atan(angle) * 200;
    ctx.fillStyle = "green";
    ctx.fillRect(x,y,5,5 );
  }

});
