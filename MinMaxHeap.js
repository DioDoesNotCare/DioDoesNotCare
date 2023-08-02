class MinHeap {
    constructor() {
        this.heap = [];
    }

    findMin() {

        if (this.heap.length == 0) {
            return;
        }

        else {
            let minNode = this.heap[0];
            const lastNode = this.heap.pop();

            if (this.heap.length > 0) {
                minNode = lastNode;
                this.bubbleDown();
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

}

var min = new MinHeap();
min.insert(10);
min.insert(5);
console.log(min.heap);
