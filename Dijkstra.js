
var connectList = {
    A: {B: 4, C: 2},
    B: {C: 3, E: 3, D: 2},
    C: {B: 1, D: 4, E: 5},
    D: {},
    E: {D: 1}
}

class Node {
    
    constructor() {
        self.children = [];
        self.links = [];
    }
    
    addChild(nodeName, linkValue) {
        this.children.push(new Node(nodeName));
        this.links.push(linkValue);
        return this;
    }
}

function dijkstraAlgorithm(startNode) {
    
}

