/**
 * Class for a LinkedList Node with data of any type
 */
class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T> | null;

    /**
     * Creates a LinkedListNode and sets the next one to null
     * 
     * @param {T} data - The data for the LinkedListNode
     */
    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class for a LinkedList of any type T
 */
class LinkedList<T> {
    head: LinkedListNode<T> | null;
    
    /**
     * Constructs the LinkedList starting with a null head
     */
    constructor() {
        this.head = null; 
    }

    /**
     * Function to append a node to the LinkedList
     * 
     * @param {T} data - Adds data to the LinkedList
     * @returns 
     */
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