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

/**
 * Compares two strings represented by LinkedLists and says which one is greater
 * 
 * @param {LinkedList<string>} stringA - the first linked list representing a string
 * @param {LinkedList<string>} stringB - the second linked list representing a string
 * @returns 1 if stringA is lexographically greater than stringB, -1 if stringB is greater, and 0 if they're equal
 */
function compareStringLinkedLists(stringA: LinkedList<string>, stringB: LinkedList<string>): number {
    //Point to both heads
    let stringANode = stringA.head;
    let stringBNode = stringB.head;

    //While both nodes exist
    while(stringANode && stringBNode) {
        // If string A is greater than return 1
        if(stringANode.data > stringBNode.data) {
            return 1;
        }

        //If string B is greater than return -1
        if(stringBNode.data > stringANode.data) {
            return -1;
        }

        //Keep iterating through if they're the same
        stringANode = stringANode.next;
        stringBNode = stringBNode.next;
    }
    //If there's a value for StringANode, that means it's longer than B so A is greater
    if(stringANode) return 1;

    //If there's a value for stringBNode, that means it's longer than A so is greater
    if(stringBNode?.next) return -1;

    //If all else fails they're proven equal
    return 0;
}

/**
 * Reverses a linked list from a head node
 * 
 * @param {LinkedListNode<T> | null} headNode - The head node of the function
 * @returns LinkedListNode<T> with the LinkedList reversed
 */
function reverseLinkedList<T>(headNode: LinkedListNode<T> | null): LinkedListNode<T> {
    // If there's no head node or only one node, just return the head node
    if(headNode === null || headNode.next === null) return headNode as LinkedListNode<T>;

    // Track the previous node
    let previousNode: LinkedListNode<T> | null = null; 

    //Start with the head node
    let currentNode: LinkedListNode<T> | null = headNode;
    
    // While we're not at the end of the list, set the next to previous, previous to current, and current to next
    while(currentNode) {
        const nextNode: LinkedListNode<T> | null = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    return previousNode as LinkedListNode<T>;
}

/**
 * Merges two linked lists
 * 
 * @param {LinkedList<T>} listA - First LinkedList to merge
 * @param {LinkedList<T>} listB - Second LinkedList to merge
 * @returns listBNode after everything is changed
 */
function mergeLinkedLists<T>(listA: LinkedList<T>, listB: LinkedList<T>) {
    // Go through both linked lists
    let listANode = listA.head;
    let listBNode = listB.head;

    // While there's a list A Node and a list B Node
    while(listANode && listBNode) {
        // Get the next nodes
        let listANextNode = listANode.next;
        let listBNextNode = listBNode.next;

        // Set List B's next to list A's next node
        listBNode.next = listANextNode;

        // Set List A's next node to listB node now
        listANode.next = listBNode;

        // Set list A node to the next node for A
        listANode = listANextNode;

        // Set list B node to the current node for B
        listBNode = listBNextNode;
    }

    return listBNode;
}

/*
TODO: Implement add nodes functionality
function addNodes(numberA: LinkedListNode<number> | null, numberB: LinkedListNode<number> | null, carry: number): LinkedListNode<number> | null {
    if(!numberA && !numberB) return carry === 0 ? null : new LinkedListNode(carry);

    const value1 = numberA ? numberA.data : 0;
    const value2 = numberB ? numberB.data : 0;
    const sum = value1 + value2 + carry;

    const newNode = new LinkedListNode(sum % 10);
    const nextA = numberA ? numberA.next : null;
    const nextB = numberB ? numberB.next : null;
    newNode.next = addNodes(nextA, nextB, Math.floor(sum / 10));
    return newNode;
} */