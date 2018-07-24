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
            for (var index = arr.length - 1; index > 0; index--){ //7
                if (arr[index] === undefined) {
                    heap = arr;
                    return heap;
                }
                var parent_index = Math.trunc(index / 2); 
                var parent = arr[parent_index]; 
                var child = arr[index]; 
                var child_index = index; 
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

// sample output
console.log(heapify([20, 3, 8, 14, 9, 6, 2]));
// alters the array to [undefined, 2, 6, 3, 9, 8, 14, 20]