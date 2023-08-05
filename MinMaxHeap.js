class MinHeap {
    constructor() {
        this.heap = [];
    }

    findMin() {

        if (this.heap.length == 0) {
            return;
        }

        else {
            const lastNode = this.heap.pop();

            if (this.heap.length > 0) {
                this.heap[0] = lastNode;
                this.bubbleDown(0);
            }

            return lastNode;
        }
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        if (index == 0) {
            return;
        }
        while (this.heap[index] < this.heap[Math.floor((index - 1) / 2)]) {
            var parentNode = this.heap[Math.floor((index - 1) / 2)];
            var temp = parentNode
            console.log(this.heap[index]);
            this.heap[Math.floor((index - 1) / 2)] = this.heap[index];
            this.heap[index] = temp;
            this.bubbleUp(Math.floor((index - 1) / 2))
        }
    }

    bubbleDown(index) {
        if (this.heap.length <= 1) {
            return;
        }

        let leftIndex = (index * 2) + 1;
        let rightIndex = (index * 2) + 2;

        if (this.heap[leftIndex] == null && this.heap[rightIndex] == null) {
            return;
        }

        else if (this.heap[leftIndex] != null && this.heap[rightIndex] == null) {
            if (this.heap[leftIndex] < this.heap[index]) {
                this.replaceIndex(leftIndex, index);
            }
        }
        
        else if (this.heap[rightIndex] != null && this.heap[leftIndex] == null) {
            if (this.heap[rightIndex] < this.heap[index]){
                this.replaceIndex(rightIndex, index);
            }
        }

        else if (this.heap[leftIndex] != null && this.heap[rightIndex] != null) {
            if (this.heap[leftIndex] < this.heap[rightIndex]){
                this.replaceIndex(leftIndex, index);
            }
            else {
                this.replaceIndex(rightIndex, index)
            }
        }
        
    }

    replaceIndex(rightOrLeftIndex, index) {
        let temp = this.heap[index];
        this.heap[index] = this.heap[rightOrLeftIndex];
        this.heap[rightOrLeftIndex] = temp;
        this.bubbleDown(rightOrLeftIndex);
    }

}

var min = new MinHeap();
min.insert(10);
min.insert(5);
console.log(min.heap);
