var Swirl = require('../src/Swirl');

describe("Swirl", function() {
  var swirl;

  beforeEach(function() {
    swirl = new Swirl;
  });

  it("should be able to swirl around a box of 100 elements", function() {
    // 0   1   2   3   4   5   6   7   8   9
    // 10  11  12  13  14  15  16  17  18  19
    // 20  21  22  23  24  25  26  27  28  29
    // 30  31  32  33  34  35  36  37  38  39
    // 40  41  42  43  44  45  46  47  48  49
    // 50  51  52  53  54  55  56  57  58  59
    // 60  61  62  63  64  65  66  67  68  69
    // 70  71  72  73  74  75  76  77  78  79
    // 80  81  82  83  84  85  86  87  88  89
    // 90  91  92  93  94  95  96  97  98  99

    var numbers = [];
    var times = 0;
    for (var i = 0; i < 10; i++) {
      var newArray = [];
      for (var j = 0; j < 10; j++) {
        newArray.push(times++);
      }
      numbers.push(newArray);
    }

    var swirled = swirl.main(numbers);
    var expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 80, 70, 60, 50, 40, 30, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 28, 38, 48, 58, 68, 78, 88, 87, 86, 85, 84, 83, 82, 81, 71, 61, 51, 41, 31, 21, 22, 23, 24, 25, 26, 27, 37, 47, 57, 67, 77, 76, 75, 74, 73, 72, 62, 52, 42, 32, 33, 34, 35, 36, 46, 56, 66, 65, 64, 63, 53, 43, 44, 45, 55, 54 ]; 
    expect(swirled).toEqual(expected);
  });

  it("should be able to swirl around a rectangle of 12 elements", function() {
    // 0 1 2
    // 3 4 5
    // 6 7 8
    // 9 10 11

    var numbers = [];
    var times = 0;
    for (var i = 0; i < 4; i++) {
      var newArray = [];
      for (var j = 0; j < 3; j++) {
        newArray.push(times++);
      }
      numbers.push(newArray);
    }

    var swirled = swirl.main(numbers);
    var expected = [ 0, 1, 2, 5, 8, 11, 10, 9, 6, 3, 4, 7 ];
    expect(swirled).toEqual(expected);
  })

});
