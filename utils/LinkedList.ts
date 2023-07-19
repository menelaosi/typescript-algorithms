class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    head: LinkedListNode<T> | null;
    
    constructor() {
        this.head = null; 
    }

    append(data: T) {
        const newNode = new LinkedListNode(data);

        if(!this.head) {
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }
}