/* global positionPanner */
//  ^^^ HACK HACK HACK FIXME

// taken from https://jsfiddle.net/tovic/Xcb8d/light/
// should be refactored

var selected = null, // Object of the element to be moved
  x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
  x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
function _drag_init(elem) {
    // Store the object of the element which needs to be moved
  selected = elem;
  x_elem = x_pos - selected.offsetLeft -100;
  y_elem = y_pos - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) {
  var x, y;
  x_pos = document.all ? window.event.clientX : e.pageX;
  y_pos = document.all ? window.event.clientY : e.pageY;
  if (selected !== null) {
    x = (x_pos - x_elem);
    y = (y_pos - y_elem);
    selected.style.left = x + 'px';
    selected.style.top = y + 'px';
    positionPanner(x, y, 295);
  }
}

// Destroy the object when we are done
function _destroy() {
  selected = null;
}

document.onmousemove = _move_elem;
document.onmouseup = _destroy;


// Maybe Mouse?

document.getElementById('draggable-element').onmousedown = function () {
  _drag_init(this);
  return false;
};

// document.getElementById('draggable-element').addEventListener('touchstart', function(event) {
//   debugger;
//   console.log(event.srcElement.parent);
// });

document.getElementById('draggable-element').addEventListener('touchmove', function(event) {
  var selected = event.target.parentNode;
  x_pos = event.touches[0].clientX;
  y_pos = event.touches[0].clientY - 100;
  x = (x_pos - x_elem);
  y = (y_pos - y_elem);
  selected.style.left = x + 'px';
  selected.style.top = y + 'px';
  positionPanner(x, y, 295);
});

// document.getElementById('draggable-element').addEventListener('touchend', function(event) {
//   // console.log(event)
// });

