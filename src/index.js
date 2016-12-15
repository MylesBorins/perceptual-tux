// var _ = require('lodash')
var once = require('lodash/once');

var audio = require('./audio');
require('./orb');

var startDiv = document.getElementById('start');
var tux = document.getElementById('content');
var orb = document.getElementById('draggable-element');

function setupUI() {
  tux.style.display = 'flex';
  orb.style.display = 'block';
  startDiv.style.display = 'none';
}

function init() {
  setupUI();
  audio.init();
}

startDiv.onclick = once(init);
