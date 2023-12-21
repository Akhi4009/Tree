class TreeNode {
    constructor(value) {
        this.value=value; // value stored in the node
        this.left=null;  // Reference to the left child
        this.right=null;  // Reference to the  right child

    }
}

class BinarySearchTree{
    constructor(){
        this.root=null // Root node of the BST
    }


    insert(value){
        const newNode=new TreeNode(value)

        if(!this.root){
            // if the tree is empty, set the new node as the root
            this.root=newNode
            return this;
        }else {
            this.insertNode(this.root,newNode)
        }
    }



    insertNode(node,newNode){
        if(newNode.value < node.value){
            // if the new node's value is less than the current node's value, go left
            if(!node.left){
                // if the left child is empty, insert the new node here
                node.left = newNode;
                
            }else{
              
                // Recursively insert the new node into the left subtree
                this.insertNode(node.left,newNode);
            }
        } else if(newNode.value > node.value) {

           // If the new node's value is greater than or equal to the current node's value, go right 
        
           if(!node.right){
            // If the right child is empty, insert the new node here
            node.right=newNode
           }else {

            // Recursively insert the new node into the right subtree

            this.insertNode(node.right,newNode);
           }
        
        }
        
    }
    
}
           
    

const bst= new BinarySearchTree();

// Insert nodes

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);
bst.insert(10)




console.log(bst.root.right)
