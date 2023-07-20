import LinkedListNode from "./LinkedListNode";

/**
 * Class for a LinkedList of any type T
 */
class LinkedList<T> {
    head: LinkedListNode<T> | null;
    
    /**
     * Constructs the LinkedList starting with a null head
     * @param {T | null} headNode - Either a node to initialize the LinkedList or null
     */
    constructor(headNode?: T | null) {
        this.head = headNode ? new LinkedListNode(headNode) : null;
    }

    /**
     * Function to append a node to the LinkedList
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

export default LinkedList;