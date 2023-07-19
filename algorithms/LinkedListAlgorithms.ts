import LinkedList from "../utils/LinkedList";
import LinkedListNode from "../utils/LinkedListNode";

/**
 * Inserts a value into a sorted LinkedList
 * 
 * @param {number} value - This is the value to be inserted
 * @param {LinkedList<number>} sortedLinkedList - This is the sorted LinkedList to insert the value
 * @returns 
 */
function linkedListInsertSorted(value: number, sortedLinkedList: LinkedList<number>): LinkedList<number> {
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

/**
 * Deletes a given node from a LinkedList if it's found
 * 
 * @param {LinkedListNode<T> | null} head - The head node
 * @param {LinkedListNode<T> | null} nodeToDelete - The node to delete
 * @returns once node is deleted
 */
function deleteNode<T>(head: LinkedListNode<T> | null, nodeToDelete: LinkedListNode<T> | null) {

    // Necessary because of null but shouldn't be hit
    if(!head || !nodeToDelete) return;

    // Checks if the head is the one to delete
    if(head === nodeToDelete) {
        // If there's another node, just set that one to the head
        if(head.next) {
            head.data = head.next.data;
            head.next = head.next.next;
        }
        return;
    }

    //Sets a node at the head
    let currentNode = head;
    
    // While we're not at the end of the LinkedList
    while(currentNode.next) {
        
        //Check if we find the node to delete then remove it
        if(currentNode.next === nodeToDelete) {
            currentNode.next = currentNode.next.next;
            return;
        }
        
        //Go to the next node
        currentNode = currentNode.next;
    }
}