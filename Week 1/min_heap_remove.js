function removeFromMinHeap(heap){
    if (heap[1]){
        min = heap[1];
    }
    if (heap.length > 2) {
        heap[1] = heap[heap.length - 1] 
        heap[heap.length - 1] = min
        heap.pop();
    } else {
        heap.pop();
    }
    if (heap.length > 2){
        for (let index = 1; index < heap.length; index += 2){
            if (index + 2 != undefined){
                if (heap[index] < heap[index + 1]) {
                    if (heap[index] < heap[index + 2]) {
                        console.log(heap);
                        return min;
                    }
                    if (heap[index] > heap[index + 2]) {
                        temp = heap[index]
                        heap[index] = heap[index + 2]
                        heap[index + 2] = temp
                    }
                }
            }           
        }
    }
    console.log(heap);
    return min;
}
// sample outputs:
console.log(removeFromMinHeap([undefined, 3, 12, 8, 17, 13, 15, 10]));
// changes the heap to [undefined, 8, 12, 10, 17, 13, 15] and returns 3

console.log(removeFromMinHeap([undefined, 8]));
// changes the heap to [undefined] and returns 8