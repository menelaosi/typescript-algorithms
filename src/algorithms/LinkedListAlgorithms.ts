import type LinkedList from '../utils/LinkedList';
import LinkedListNode from '../utils/LinkedListNode';

/**
 * Inserts a value into a sorted LinkedList
 * @param {number} value - This is the value to be inserted
 * @param {LinkedList<number>} sortedLinkedList - This is the sorted LinkedList to insert the value
 * @returns
 */
function linkedListInsertSorted(value: number, sortedLinkedList: LinkedList<number>): LinkedList<number> {
	// Determine the node to insert and set the current node to the head
	const insertNode = new LinkedListNode(value);
	let currentNode = sortedLinkedList.head ?? undefined;

	// If the LinkedList is null, we set the next node for insert
	// node to the current node and the head of the linked list to that node
	if (!currentNode || currentNode.data! >= value) {
		insertNode.next = currentNode;
		sortedLinkedList.head = insertNode;
		return sortedLinkedList;
	}

	// While we're increasing in the LinkedList, keep iterating
	while (currentNode.next && currentNode.next.data! < value) {
		currentNode = currentNode.next;
	}

	// Set the insert node's next node to the current node's next node
	insertNode.next = currentNode.next;

	// Set the current node's next node to the insertion node
	currentNode.next = insertNode;

	// Return the sorted linked list
	return sortedLinkedList;
}

/**
 * Deletes a given node from a LinkedList if it's found
 * @param {LinkedListNode<T> | null} head - The head node
 * @param {LinkedListNode<T> | null} nodeToDelete - The node to delete
 * @returns once node is deleted
 */
function deleteNode<T>(head: LinkedListNode<T> | undefined, nodeToDelete: LinkedListNode<T> | undefined) {
	// Necessary because of null but shouldn't be hit
	if (!head || !nodeToDelete) {
		return;
	}

	// Checks if the head is the one to delete
	if (head === nodeToDelete) {
		// If there's another node, just set that one to the head
		if (head.next) {
			head.data = head.next.data;
			head.next = head.next.next;
		}

		return;
	}

	// Sets a node at the head
	let currentNode = head;

	// While we're not at the end of the LinkedList
	while (currentNode.next) {
		// Check if we find the node to delete then remove it
		if (currentNode.next === nodeToDelete) {
			currentNode.next = currentNode.next.next;
			return;
		}

		// Go to the next node
		currentNode = currentNode.next;
	}
}

/**
 * Compares two strings represented by LinkedLists and says which one is greater
 * @param {LinkedList<string>} stringA - the first linked list representing a string
 * @param {LinkedList<string>} stringB - the second linked list representing a string
 * @returns 1 if stringA is lexographically greater than stringB, -1 if stringB is greater, and 0 if they're equal
 */
function compareStringLinkedLists(stringA: LinkedList<string>, stringB: LinkedList<string>): number {
	// Point to both heads
	let stringaNode = stringA.head;
	let stringbNode = stringB.head;

	// While both nodes exist
	while (stringaNode && stringbNode) {
		// If string A is greater than return 1
		if (stringaNode.data! > stringbNode.data!) {
			return 1;
		}

		// If string B is greater than return -1
		if (stringbNode.data! > stringaNode.data!) {
			return -1;
		}

		// Keep iterating through if they're the same
		stringaNode = stringaNode.next;
		stringbNode = stringbNode.next;
	}

	// If there's a value for StringANode, that means it's longer than B so A is greater
	if (stringaNode) {
		return 1;
	}

	// If there's a value for stringBNode, that means it's longer than A so is greater
	if (stringbNode?.next) {
		return -1;
	}

	// If all else fails they're proven equal
	return 0;
}

/**
 * Reverses a linked list from a head node
 * @param {LinkedListNode<T> | undefined} headNode - The head node of the function
 * @returns LinkedListNode<T> with the LinkedList reversed
 */
function reverseLinkedList<T>(headNode: LinkedListNode<T> | undefined): LinkedListNode<T> | undefined {
	// If there's no head node or only one node, just return the head node
	if (!headNode?.next) {
		return headNode;
	}

	// Track the previous node
	let previousNode: LinkedListNode<T> | undefined;

	// Start with the head node
	let currentNode: LinkedListNode<T> | undefined = headNode;

	// While we're not at the end of the list, set the next to previous, previous to current, and current to next
	while (currentNode) {
		const nextNode: LinkedListNode<T> | undefined = currentNode.next;
		currentNode.next = previousNode;
		previousNode = currentNode;
		currentNode = nextNode;
	}

	return previousNode;
}

/**
 * Merges two linked lists
 * @param {LinkedList<T>} listA - First LinkedList to merge
 * @param {LinkedList<T>} listB - Second LinkedList to merge
 * @returns listBNode after everything is changed
 */
function mergeLinkedLists<T>(listA: LinkedList<T>, listB: LinkedList<T>) {
	// Go through both linked lists
	let listaNode = listA.head;
	let listbNode = listB.head;

	// While there's a list A Node and a list B Node
	while (listaNode && listbNode) {
		// Get the next nodes
		const listaNextNode = listaNode.next;
		const listbNextNode = listbNode.next;

		// Set List B's next to list A's next node
		listbNode.next = listaNextNode;

		// Set List A's next node to listB node now
		listaNode.next = listbNode;

		// Set list A node to the next node for A
		listaNode = listaNextNode;

		// Set list B node to the current node for B
		listbNode = listbNextNode;
	}

	return listbNode;
}

/**
 * Adds two numbers in a linked list that starts with the lowest digit as the head
 * @param {LinkedListNode<number> | null} l1 - the first linked list
 * @param {LinkedListNode<number> | null} l2 - the second linked list
 * @returns a LinkedListNode that is the head of a new LinkedList with the sum
 */
function addTwoNumbers(l1: LinkedListNode<number> | undefined, l2: LinkedListNode<number> | undefined): LinkedListNode<number> | undefined {
	// Set a value for the carry and a
	let carry = 0;
	const listNode = new LinkedListNode(0);
	let dummyNode = listNode;
	while (l1 !== null || l2 !== null) {
		// Sets the values to add to the data or 0
		const value1 = l1!.data ?? 0;
		const value2 = l2!.data ?? 0;

		// Gets the sum of these values and the carry
		const value = value1 + value2 + carry;

		// Sets a new carry based on the value
		carry = value >= 10 ? 1 : 0;

		// Sets the next node for the dummy node to a new node
		dummyNode.next = new LinkedListNode(value % 10);

		// Sets the dummyNode to the new node
		dummyNode = dummyNode.next;

		// Moves l1 and l2 forward if they're not null
		if (l1 !== null) {
			l1 = l1!.next;
		}

		if (l2 !== null) {
			l2 = l2!.next;
		}
	}

	// Adds the carry if necessary
	if (carry > 0) {
		dummyNode.next = new LinkedListNode(carry);
	}

	return listNode.next;
}
