exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0, len=arr.length; i<len; i++) {
      if ( arr[i] === item){
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    var sum = 0;
    for (var i=0, len=arr.length; i<len; i++){
      sum+=arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var j=0, out=[];
    for (var i = 0, len=arr.length; i<len; i++){
      if (arr[i] !== item){
        out[j]=arr[i];
        j++;
      }
    }
    return out;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i=0,len=arr.length; i<len; i++){
      if (arr[i] === item){
        arr.splice(i,1);
        i--;
        len--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    for (var len=arr.length, i=len; i>0; i--){
      arr[i]=arr[i-1];
    }
    arr[0]=item;
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    for (var i=0, len=arr2.length; i<len; i++){
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i=0,len=arr.length; i<len; i++){
      if (arr[i]===item){ count++; }
    }
    return count;
  },

  duplicates: function(arr) {
    var out= [];
    for (var i=0, len=arr.length; i<len; i++){
      var count = 0;
      for (var j=0; j<len; j++){
        if(arr[i] === arr[j]){
          count++;
        }
      }
      if (count > 1 && out.indexOf(arr[i])===-1){
        out.push(arr[i]);
      }
      arr.splice(i,1);
      len--;
    }
    return out;
  },

  square: function(arr) {
    for (var i=0, len=arr.length; i<len; i++){
      arr[i]=arr[i]*arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var out = [];
    for (var i=0, len=arr.length; i<len; i++){
      if (arr[i] === target){ out.push(i); }
    }
    return out;
  }
};
