class Node{
    constructor(value){
        this.value = value;
        this.left = null;  
        this.right = null;
    }
}

class BST{
    constructor() {
        this.root = null;
        this.size_left = 0;
        this.size_right = 0;
    }
    preOrder(root) {
        console.log(root.value);
        if(root.left){
            this.preOrder(root.left);
        }
        if(root.right){
            this.preOrder(root.right);
        }
    };
    postOrder(root){
        if(root.left){
            this.postOrder(root.left);
        }
        if(root.right){
            this.postOrder(root.right);
        }
        console.log(root.value);
    };
    inOrder(root){
        if(root.left){
            this.inOrder(root.left);
        }
        console.log(root.value);
    
        if (root.right){
            this.inOrder(root.right);
        }
    };

    insert(value) {
        const new_node = new Node(value);
        if (!this.root){
            this.root = new_node;
            return this;
        }
        let runner = this.root;

        while (runner){
            if (new_node.value > runner.value){
                if (runner.right !== null) {
                    runner = runner.right;
                } else {
                    runner.right = new_node;
                    break;
                }
            } else {
                if (runner.left !== null){
                    runner = runner.left;
                } else {    
                    runner.left = new_node;
                    break;
                }
            }
        }
        return this;
    }
}

var first = new BST();
first.insert(30).insert(40).insert(15).insert(65).insert(10).insert(44).insert(22).insert(23)
// console.log(first)
// console.log(first.root)
// console.log(first.root.right)
// console.log(first.root.left)
// first.preOrder(first.root)
// first.postOrder(first.root)
first.inOrder(first.root)