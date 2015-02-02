$(function() {
  var canvas = Snap('#tick');
  var canvas2 = Snap('#tick2');

  function animateTick() {
    var path = document.querySelector('svg#tick path');
    var length = path.getTotalLength();
    path.style.transition = 'none';
    path.style.WebkitTransition = 'none';
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition =   'stroke-dashoffset 1s linear';
    path.style.WebkitTransition = 'stroke-dashoffset 1s linear';
    path.style.strokeDashoffset = '0';
  }

  function displayTick(cb) {
    var tick = document.querySelector('svg#tick');
    tick.style.display = 'block';
    cb();
  }

  $('#btn-add').click(function() {
    displayTick(function() {
      animateTick();
    });
  });
});