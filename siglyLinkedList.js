class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let lastNode = this.head;
        while (lastNode.next !== null) {
            lastNode = lastNode.next;
        }

        lastNode.next = newNode;
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(data) {
        if (this.head === null) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.data !== data) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data + ' -> ');
            current = current.next;
        }
        console.log('null');
    }
}

// Example usage:
const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.prepend(0);

linkedList.display(); // Output: 0 -> 1 -> 2 -> 3 -> null

linkedList.delete(2);

linkedList.display(); // Output: 0 -> 1 -> 3 -> null