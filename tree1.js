

// Node class represent a node in the tree

class Node {
    constructor(data){
        this.data=data;  // Data stored in the node
        this.children=[] // Array to stored child nodes
    }

    addChild(node){
        this.children.push(node)  // Add a child to the node
    }
}

// Tree Class represent the entire tree;
class Tree {
    constructor(rootData){
        this.root= new Node(rootData)
    }


//                                        Traversal                               //
    
  // Depth-First Traversal: Pre-order
  preOrderTraversal(node, visit) {
    if (node === null) return;

    visit(node); // Visit the current node

    // Check if the node has children before attempting to iterate over them
    if (node.children && node.children.length > 0) {
      for (const child of node.children) {
        this.preOrderTraversal(child, visit); // Recursively visit child nodes
      }
    }
  }

      // Depth-First Traversal: In-order
      inOrderTraversal(node, visit) {
        if (node === null) return;
    
        // Recursively visit all left children
        if (node.children.length > 0) {
            this.inOrderTraversal(node.children[0], visit);
        }
    
        // Visit the current node
        visit(node);
    
        // Recursively visit all right children
        if (node.children.length > 1) {
            this.inOrderTraversal(node.children[1], visit);
        }
    }


    //Depth-First Traversal: Post Order

    postOrderTraversal(node,visit) {
        if(node===null)return;

        node.children.forEach(child=>this.postOrderTraversal(child,visit));
        visit(node)  /// Visit the current node
    }


    // Breadth-First Traversal
    breadthFirstTraversal(visit){

        const queue = [this.root] // use a queue to keep track of nodes to visit

        while(queue.length>0){
            const currentNode=queue.shift(); // Dequeue the first node
            visit(currentNode) // Visit the current node
        
        

        // Enqueue the child nodes for further exploration

        currentNode.children.forEach(child=>{
            queue.push(child);
        })
    }
}



    //                          Searching                     //

    // Depth-First Search:Pre-order

    preOredrSearch(node,targeValue){
        if(node===null){
            return null
        }

        if(node.data === targeValue){
            return node; // Found the target Node
        }

        for(const child of node.children){
            const result= this.preOredrSearch(child,targeValue)

            if(result!==null){
                return result  // Propagate the results if found in the subtree

            }
        }
        return null
    }


    // Depth-First Search: Post-order
  postOrderSearch(node, targetValue) {
    if (node === null) return null;

    for (const child of node.children) {
      const result = this.postOrderSearch(child, targetValue);
      if (result !== null) {
        return result; // Propagate the result if found in the subtree
      }
    }

    if (node.data === targetValue) {
      return node; // Found the target node
    }

    return null; // Target not found in this subtree
  }

}

const myTree = new Tree('A'); // Creating a tree with 'A' as the root node

const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D'); // Create an instance of Node for 'D'
const nodeE = new Node('E'); // Create an instance of Node for 'E'

myTree.root.addChild(nodeB); // Adding B as a child to the root
myTree.root.addChild(nodeC); // Adding C as a child to the root

nodeB.addChild(nodeD); // Adding D as a child to B
nodeB.addChild(nodeE); // Adding E as a child to B

// Accessing nodeB



// const rootNode=myTree.root;
// const childrenOfroot=rootNode.children;

// const nodeBIndex=childrenOfroot.findIndex(child=>child===nodeB);

// if(nodeBIndex !== -1){
// const foundNodeB = childrenOfroot[nodeBIndex]
// console.log(foundNodeB)
// }else{
//     console.log('NodeB not found');
// }

//  console.log(myTree); 

// console.log('Pre-order Traversal:');

// // myTree.preOrderTraversal(myTree.root, node=>console.log(node.data));
// myTree.preOrderTraversal(myTree.root, node => console.log(node.data));

// console.log("///////////")
// myTree.inOrderTraversal(myTree.root, node => console.log(node.data));

// console.log("////////////")
// myTree.postOrderTraversal(myTree.root, node => console.log(node.data));

// console.log("//////////")

// myTree.breadthFirstTraversal( node => console.log(node.data));



// A  B 


console.log('Pre-order Search for node with value "D":');
const resultNodePreOrder = myTree.preOredrSearch(myTree.root, 'F');
console.log(resultNodePreOrder);

console.log('\nPost-order Search for node with value "D":');
const resultNodePostOrder = myTree.postOrderSearch(myTree.root, 'D');
console.log(resultNodePostOrder);