function Quicksort(array) {
    let array_length = array.length - 1
    // let pivot = Math.floor(array.length / 2);
    let pivot = 0
    let index_left = 0;
    let index_right = array.length - 1

    while(pivot != array_length){
        for (let i = index_left; i < pivot; i++){
            if (array[i] > array[pivot]){
                // console.log("Array[i]: " + array[i])
                for(let j = index_right; j > pivot; j--) {
                    if (array[j] < array[pivot]){
                        temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                }
            }
        }
        pivot++;
    }
    return array;
}


var array1 = [2, 22, 16, 11, 4, 6, 35, 3, 14, 15, 16, 34, 9, 1];
console.log(Quicksort(array1));