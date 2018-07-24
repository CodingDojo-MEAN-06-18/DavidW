//Can we make this into a method of an object?
function each(arr, callback) {
    // loop through the array
    for(var i = 0; i < arr.length; i++) {
      callback(arr[i]); // invoking the callback many times... delegation!
    }
  }


  var _ = {
    map: function(array, callback) {
        // loops through each index of array
        for (let i = 0; i < array.length; i++) {
        //  changes current index of array with the callback(defined iteratee/argument of array[index current value])
          array[i] = callback(array[i]);
        }
      },
      
    reduce: function(array, [memo], callback)  { 
        for(index = 0; index < array.length; index++){
            if (!memo) {
                memo = callback(array[index]);
                index++;
            }
            array[index] = callback(array[index]);
        }
    },
    find: function(array, callback) {
        var test_array = []
        for (index = 0; index < array.length; index++ ){
            test_array[index] = callback(array[index]);
            if (predicate = test_array[index]){
                return array[index];
            }
        }
        return undefined;
    },
    filter: function(array, callback) {
        var passed = [];
        for (index = 0; index < array.length; index++ ){
            if (callback(array[index])) {
                passed.push(array[index]);
            }
        }
        if (passed){
            return passed;
        } else {
            return undefined;
        }
    },
    reject: function(array, callback) {
        var not_passed = [];
        for (index = 0; index < array.length; index++ ){
            var new_predicate = callback(array[index]);
            if (predicate != new_predicate){
                not_passed.push(array[index]);
            }
        }
        if (not_passed){
            return not_passed;
        } else {
            return undefined;
        }
    }
}
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

  