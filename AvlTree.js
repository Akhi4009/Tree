// AVLNODE represents a node in a avl tree

class AVLNode {
    constructor(data, left=null, right=null){

        this.data = data; // Data stored in the node
        this.left = left //Left Child
        this.right = right //Right Child
        this.hight = 1 // Height of the node initiall set to 1;

    }

    
}



// AVL Tres reperesents as AVL TREE

class AVLTree {
    constructor(){
        this.root=null; // Root node of the tree
    }

    //helper function to get the height of the node

    height(node){
        return node?node.height:0;
    }

    // Helper function to update the hight of the node

    updateHeight(node){
        node.height = 1+Math.max(this.height(node.left), this.height(node.right));

    }

    // Helpernfunction to calculate the balance factor of a node

    getBalanceFactor(node){

        return node?this.height(node.left) - this.height(node.right) : 0;

    }


    // Helper function to perform a right rotation

    rotateRight(y){
        const x = y.left;
        const T2 = x.right;

        // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    this.updateHeight(y);
    this.updateHeight(x);

    return x // new Root
    }

    // Helper function to Perform a left rotation

    rotateLeft(x) {
        const y=x.right;
        const T2=y.left;

        //perform rotation

        y.left = x;
        x.right = T2
    
        // Update height

        this.updateHeight(x);
        this.updateHeight(y);

        return y; // New root
    
    }

    
    // helper function to insert a node into AVL tree

    insertNode(node,data){
        // Perform standord BST insert
        if(!node){
            return new AVLNode(data)
        }

        if(data<node.data){
            node.left=this.insertNode(node.left, data);
        }else if(data>node.data){
            node.right=this.insertNode(node.right. data);
        }else{

            // Duplicate keys are not allowed in AVL node
            return node;
        }

        // Update height of the current node
        this.updateHeight(node)

        // get the balance factor of this node to check if it become unbalanced

        const balance = this.getBalanceFactor(node);

        // Perform rotation if the node is unbalanced

        // Left Left Case

        if(balance>1 && data<node.left.data){
            return this.rotateRight(node)
        }

        // Right Right Case

        if(balance<-1 && data > node.right.data){
            return this.rotateLeft(node)
        }

        // Left Right Case

        if(balance>1 && data>node.left.data){
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Right Left Case
         
        if(balance<-1 && data <node.right.data){
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node)
        }

        return node // Return the unchanged node
     }

     
        // Public method to insert a node into the avl tree

        insert(data){
            this.root = this.insertNode(this.root,data);
        }

}
