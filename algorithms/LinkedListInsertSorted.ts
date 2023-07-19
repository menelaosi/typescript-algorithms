import LinkedList from "../utils/LinkedList";
import LinkedListNode from "../utils/LinkedListNode";

/**
 * Inserts a value into a sorted LinkedList
 * 
 * @param {number} value - This is the value to be inserted
 * @param {LinkedList<number>} sortedLinkedList - This is the sorted LinkedList to insert the value
 * @returns 
 */
function LinkedListInsertSorted(value: number, sortedLinkedList: LinkedList<number>): LinkedList<number> {
    const insertNode = new LinkedListNode(value);
    let currentNode = sortedLinkedList.head;

    if(!currentNode || currentNode.data >= value) {
        insertNode.next = currentNode;
        sortedLinkedList.head = insertNode;
        return sortedLinkedList;
    }
    
    while(currentNode.next != null && currentNode.next.data < insertNode.data) {
        currentNode = currentNode.next;
    }

    insertNode.next = currentNode.next;
    currentNode.next = insertNode;

    return sortedLinkedList;
}