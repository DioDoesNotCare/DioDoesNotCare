// A ---- B ------ C
// |      |        |
// D ---- E ------ F

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    addChild(data) {
        this.children.push(new Node(data));
        return this;
    }
}

function BreadthFirstSearch(root) {
    const queue = [root];
    const visited = new Set();
    const finished = [];
    
    while (queue.length > 0) {
        const nodePop = queue.shift();
        if (!visited.has(nodePop)) {
            visited.add(nodePop);
            finished.push(nodePop);
            for (let i = 0; i < nodePop.children.length; i++) {
                queue.push(nodePop.children[i]);
            }
        }
    }
    return finished;
}

// A
var nodeA = new Node('A');
var nodeB = new Node('B');
var nodeC = new Node('C');
var nodeD = new Node('D');
var nodeE = new Node('E');
var nodeF = new Node('F');

nodeA.children.push(nodeB);
nodeA.children.push(nodeD);

nodeB.children.push(nodeA);
nodeB.children.push(nodeE);
nodeB.children.push(nodeC);

nodeC.children.push(nodeB);
nodeC.children.push(nodeF);

nodeD.children.push(nodeA);
nodeD.children.push(nodeE);

nodeE.children.push(nodeD);
nodeE.children.push(nodeB);
nodeE.children.push(nodeF);

nodeF.children.push(nodeC);
nodeF.children.push(nodeE);

console.log(BreadthFirstSearch(nodeB));