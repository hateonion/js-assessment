exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var index;
    for(index in arr){
      if (arr[index] === item){
        return parseInt(index);
      }
    }
    return -1;
  },

  sum : function(arr) {
    var arrSum = 0;
    arr.forEach(function(item) {
      arrSum += item;
    });
    return arrSum;

  },

  remove : function(arr, item) {


  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
