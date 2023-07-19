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

export default LinkedListNode;