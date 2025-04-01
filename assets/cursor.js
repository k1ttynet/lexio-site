var h = window.innerHeight - 2;
var horizontalGrid = 8;
var verticalGrid = 16; // Different size for vertical movement

document.body.addEventListener('mousemove', function(e) {
  var cursor = document.getElementById("cursor");

  cursor.style.left = Math.floor(e.pageX / horizontalGrid) * horizontalGrid + 'px';
  cursor.style.top = Math.floor(e.pageY / verticalGrid) * verticalGrid + 'px';
});
