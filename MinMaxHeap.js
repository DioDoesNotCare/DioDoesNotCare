class MinHeap {
    constructor() {
        this.heap = [];
    }

    findMin() {

        if (this.heap.length == 0) {
            return;
        }

        else {
            const minNode = this.heap[0];
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
        this.bubbleUp();
    }

    bubbleUp() {

    }

    bubbleDown() {
        
    }
}