class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // The first node in the list
        this.size = 0;    // Total number of nodes in the list
    }

    // Add a node to the end of the list
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            // If the list is empty, set the new node as the head
            this.head = newNode;
        } else {
            // Traverse to the end of the list and add the new node
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Insert a node at a specific position
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return false; // Invalid index
        }

        const newNode = new Node(data);

        if (index === 0) {
            // Insert at the beginning
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // Traverse to the position and insert the node
            let current = this.head;
            let previous = null;
            let count = 0;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
        return true;
    }

    // Remove a node at a specific position
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null; // Invalid index
        }

        let current = this.head;

        if (index === 0) {
            // Remove the head node
            this.head = current.next;
        } else {
            // Traverse to the position and remove the node
            let previous = null;
            let count = 0;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            previous.next = current.next;
        }
        this.size--;
        return current.data;
    }

    // Get the data at a specific index
    getAt(index) {
        if (index < 0 || index >= this.size) {
            return null; // Invalid index
        }

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        return current.data;
    }

    // Print the linked list
    print() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }

    // Get the size of the linked list
    getSize() {
        return this.size;
    }

    // Check if the list is empty
    isEmpty() {
        return this.size === 0;
    }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.insertAt(15, 1); // Insert 15 at index 1
list.print(); // Output: 10 -> 15 -> 20 -> 30
list.removeAt(2); // Remove node at index 2
list.print(); // Output: 10 -> 15 -> 30
console.log(list.getAt(1)); // Output: 15
console.log(list.getSize()); // Output: 3
console.log(list.isEmpty()); // Output: false