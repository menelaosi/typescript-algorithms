/**
 * Class for a LinkedList Node with data of any type
 */
class LinkedListNode<T> {
	/**
     * Creates a LinkedListNode and sets the next one to null
     * @param {T} data - The data for the LinkedListNode
     */
	constructor(public data?: T, public next?: LinkedListNode<T>) { }
}

export default LinkedListNode;
