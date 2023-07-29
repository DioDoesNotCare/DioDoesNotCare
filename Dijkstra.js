var distanceList = { 
    "nodeA": 9999,
    "nodeB": 9999,
    "nodeC": 9999,
    "nodeD": 9999,
    "nodeE": 9999
}

var queue = [];

// need to change this to priority queue 

class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item) {
        this.items[this.backIndex] = item
        this.backIndex++
        return item + ' inserted'
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    peek() {
        return this.items[this.frontIndex]
    }
    get printQueue() {
        return this.items;
    }
}

class Node {
    
    constructor() {
        this.name = "";
        this.children = [];
        this.links = [];
        this.visited = false;
    }
    
    addChild(node, linkValue) {
        this.children.push(node);
        this.links.push(linkValue);
        return this;
    }
}

function dijkstraAlgorithm(startNode) {
    // verify if node has been checked 
    
    if (startNode.visited == true) {
        return;
    } 
    else {
        startNode.visited = true;
    }

    var valueOfNode = distanceList[startNode.name];

    for (let i = 0; i < startNode.children.length; i++) {
        // 
        var childNode = startNode.children[i];
        let linkValue = startNode.links[i];
        if (valueOfNode + linkValue < distanceList[childNode.name]) {
            distanceList[childNode.name] = valueOfNode + linkValue;
            queue.push(childNode);
        }

    }
    
    if (queue.length > 0) {
        var map = queue.map(x => distanceList[x.name]);
        var minValue = Math.min(...map);
        var minIndex = map.indexOf(minValue);
        console.log(queue);
        let tempNode = queue[minIndex];
        queue.splice(minIndex, 1);
        console.log(tempNode);
        dijkstraAlgorithm(tempNode);
    }

    console.log(distanceList);
    
}

var nodeA = new Node();
nodeA.name = "nodeA";
var nodeB = new Node(); 
nodeB.name = "nodeB";
var nodeC = new Node();
nodeC.name = "nodeC"; 
var nodeD = new Node();
nodeD.name = "nodeD";
var nodeE = new Node();
nodeE.name = "nodeE"; 

nodeA.addChild(nodeB, 6);
nodeA.addChild(nodeD, 1);
nodeB.addChild(nodeA, 6);
nodeB.addChild(nodeD, 2);
nodeB.addChild(nodeE, 2);
nodeB.addChild(nodeC
, 5);
nodeC.addChild(nodeB, 5);
nodeC.addChild(nodeE, 5);
nodeD.addChild(nodeA, 1);
nodeD.addChild(nodeB, 2);
nodeD.addChild(nodeE, 1);
nodeE.addChild(nodeD, 1);
nodeE.addChild(nodeB, 2);
nodeE.addChild(nodeC, 5);

function start(startNode) {
    distanceList[startNode.name] = 0;
    dijkstraAlgorithm(startNode);
}

start(nodeA);
