class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Insert operation
    insert(data) {
      const node = new Node(data);
  
      if (!this.head) {
        this.head = node;
        this.tail = node;
        this.tail.next = this.head;
      } else {
        node.next = this.head;
        this.head = node;
        this.tail.next = this.head;
      }
  
      this.size++;
    }
  
    // Delete operation
    delete() {
      if (!this.head) {
        console.log("List is empty");
        return;
      }
  
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.tail.next = this.head;
      }
  
      this.size--;
    }
  
    // Display operation
    display() {
      if (!this.head) {
        console.log("List is empty");
        return;
      }
  
      let current = this.head;
      do {
        console.log(current.data);
        current = current.next;
      } while (current !== this.head);
    }
  }
  
  // Create a new instance of CircularLinkedList
  const myList = new CircularLinkedList();
  
  // Insert some data
  myList.insert("apple");
  myList.insert("banana");
  myList.insert("cherry");
  
  // Display the list
  myList.display();
  // Output: 
  // cherry
  // banana
  // apple
  
  // Delete the first node
  myList.delete();
  
  // Display the list again
  myList.display();
  // Output: 
  // banana
  // apple
  