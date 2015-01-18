"use strict"

module.exports = function() {
  var _debug = false;

  //Does all the work.  Figures out where to start and how much to walk.
  function _swirl(array, width, height) {
    if (_debug) {
      console.log('width: ' + width);
      console.log('height: ' + height);
    }

    var times = 0;
    var toReturn = [];
    for (var i = width, j = height; i > 0; i -= 2, j -= 2) {
      if (_debug) {
        console.log("i: " + i);
        console.log("j: " + j);
      }
      _walk(array, times,            times,           "right", i,   toReturn);
      _walk(array, times+1,          width-1-times,   "down",  j-1, toReturn);
      _walk(array, height-1-times,   width-1-times-1, "left",  i-1, toReturn);
      _walk(array, height-1-times-1, times,           "up",    j-2, toReturn);
      times++;
    }
    return toReturn;
  }

  //Just does the walking
  function _walk(array, row, col, direction, distance, newArray) {
    if (_debug) {
      console.log("row: " + row);
      console.log("col: " + col);
      console.log("direction: " + direction);
      console.log("distance: " + distance);
    }

    switch(direction) {
      case "up":
        for (var i = 0; i < distance; i++) {
          newArray.push(array[row-i][col]);
        }
      break;

      case "down":
        for (var i = 0; i < distance; i++) {
          newArray.push(array[row+i][col]);
        }
      break;

      case "left":
        for (var i = 0; i < distance; i++) {
          newArray.push(array[row][col-i]);
        }
      break;

      case "right":
        for (var i = 0; i < distance; i++) {
          newArray.push(array[row][col+i]);
        }
      break;
    }
  }

  this.toggleDebug = function() {
    _debug = !_debug;
  }

  this.main = function(numbers) {
    var toReturn = [];
    if (numbers && numbers instanceof Array) {
      var height = numbers.length;
      var width  = numbers[0].length;
      toReturn = _swirl(numbers, width, height);
    }
    return toReturn;
  }
}
