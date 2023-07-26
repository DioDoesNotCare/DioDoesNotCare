class BinarySearchTree 
{
    // Removing a node notes
    // 1. no children = easy
    // 2. 1 child = cut connection, delete, replace, easy
    // 3. 2 child => 2 options: a) find highest value of left subtree from root      b) find lowest value of right subtree from root
    constructor() {
        this.root = null;
    }
    
    insert(data) {
        var newNode = new Node(data);
        
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }

    }

    insertNode(currentNode, newNode) {

        if (newNode.data < currentNode.data) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            }
            else {
                this.insertNode(currentNode.left, newNode);
            }
        }

        else {

            if (currentNode.right === null) {
                currentNode.right = newNode;
            }

            else {
                this.insertNode(currentNode.right, newNode);
            }
        }
    }

    delete(data) {

        this.findData(this.root, data);
        
    }

    findData(node, data) {
        if (node == null) {
            return;
        }
        if (data > node.data) {
            this.findData(node.right, data);
        }
        if (data < node.data) {
            this.findData(node.left, data);
        }
        if (data == node.data) {
            this.deleteNode(node);
        }
    }

    deleteNode(node) { 
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right; 
            return node;
        }
        if (node.right === null) {
            node = node.left;
            return node;
        }

        var randomness = Math.floor(Math.random() * 2);
        
        if (randomness == 0) {
            this.highestSmallValue(node.left, node);
        }
        else {
            this.lowestBigValue(node.right, node);
        }


    }    

    highestSmallValue(node, originalDeleteNode) {
        if (node.right != null) {
            this.highestSmallValue(node.right);
        }
        else{ 
            originalDeleteNode.data = node.data;
            this.deleteNode(node)
        }
    }

    lowestBigValue(node, originalDeleteNode) {
        if (node.left != null) {
            this.lowestBigValue(node.left)
        }
        else {
            originalDeleteNode.data = node.data;
            this.deleteNode(node);
        }
    }

}

class Node {
    constructor(data) {
        this.data = data; 
        this.left = null;
        this.right = null;
    }
}
var BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
BST.delete(25);

console.log(BST.root.right);
    }
}
