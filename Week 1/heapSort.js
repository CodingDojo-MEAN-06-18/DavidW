function heapSort(arr){
    if (!arr){
        heap = arr
        return heap
    }
    heap = []
    arr.push(arr[0])
    arr[0] = undefined;

    if (arr.length > 0) {
        if (arr.length > 3) { // gurantees their were 3 numbers to start in the array atleast
            for (let index = arr.length - 1; index > 0; index--){ //7
                if (arr[index] < arr[index - 1]){
                    let temp = arr[index];
                    arr[index] = arr[index - 1]
                    arr[index - 1] = temp
                    index += 2; //makes sure that two consecutive numbers dont need to be pushed up
                }
            }
            // confused? i can easily sort the smallest numbers over continuously
            // this is me starting to heapify the 3 last numbers
            // for (let index = arr.length - 1; index > arr.length - 4; index--){ //7
                // const new_array = arr.splice(arr[index], ((arr.length - 1) - index));
                // heap.push(heapify(new_array));
            // or or or or
                // new_array = []
                // for (let index = arr.length - 1; index > 0; index--){ //7
                // new_array.push(arr[index]);
                // heapify(new_array);
        }
    }
    heap = arr;
    return heap;
}
function heapify(arr){
    if (!arr){
        heap = arr
        return heap
    }
    heap = []
    arr.push(arr[0])
    arr[0] = undefined;

    if (arr.length > 0) {
        if (arr.length > 3) { // gurantees their were 3 numbers to start in the array atleast
            for (let index = arr.length - 1; index > 0; index--){ //7
                if (arr[index] === undefined) {
                    heap = arr;
                    return heap;
                }
                let parent_index = Math.trunc(index / 2); 
                let parent = arr[parent_index]; 
                let child = arr[index]; 
                let child_index = index; 
                // console.log("Parent_Index:",parent_index,"Parent Value:", parent)
                // console.log("Child_Index:",child_index,"Child Value:", child)
                // console.log("Index:", index);
                // console.log("Current Array:", arr);
                // console.log("");

                while (child < parent) {
                    arr[parent_index] = child
                    arr[child_index] = parent
                    parent_index = Math.trunc(parent_index / 2);
                    parent = arr[parent_index];
                    child = arr[(parent_index * 2)+1];
                    child_index = (parent_index * 2)+1;
                }
            }
        }
    }
    heap = arr;
    return heap;
}

console.log(heapSort([20, 3, 8, 14, 9, 6, 2]));