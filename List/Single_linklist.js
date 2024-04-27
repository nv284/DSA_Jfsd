class ListNode { 
    constructor(data) { 
        this.data = data; 
        this.next = null; 
    } 
} 
 
class SinglyLinkedList { 
    constructor() { 
        this.head = null; 
    } 
 
    appendNode(newNode){
        let node = this.head;
        if(node==null){
            //Means it's just empty list
            this.head = newNode;
            return;
        }
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }
}
    let myList = new LinkedList();
let node = new Node(5);

myList.appendNode(node);
myList.appendNode(new Node(11));
myList.appendNode(new Node(7));
myList.printList();

