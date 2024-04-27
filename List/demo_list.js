class LinkedList{
    constructor(head = null){
        this.head = head ;
    }
    appendNode(newNode){
        let node = this.head ;
        if(node == null){
            this.node = newNode ; // it's just empty list , so we are adding the first element to the list 
            return;
        }
        while(node.next){
            node = node.next;
        }
        node.next = newNode ;
    }
    insertAt(index , newNode){
        let node = this.head;
        if(index == 0){
            newNode.next=node;
            this.head = newNode;
            return;
        }
        while(--index){
            if(node.next !== null)
                node = node.next ;
            else
               throw Error("Index out of Bound"); 
        }
        let temVal = node.next;
        node.next = newNode;
        newNode.next = temVal;
    }

    removeFrom(index){
        let node = this.head;
        if(index === 0 ){
            if(node!== null){
                node = node.next ;
                this.head = node ;
            }
            else
               throw Error("Indxe out of Bound ");
            return;
        }
        while(--index){
            if(node.next !== null)
               node =node.next;
               else
                throw Error("Index out of bound ");
            }
           node.next = node.next.next;
        }
        printList(){
            let node = this.head;
            //process.stdout.write("Head->")
            console.log("Head->");
            while(node){
                //process.stdout.write(node.data + "->");
                console.log(node.data);
                node = node.next;
            }
            console.log("NULL");
        }
        
    }


class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let myList = new LinkedList ();
let node = new Node(5);

myList.appendNode(node) ;
myList.appendNode(new Node (10)) ;
myList.appendNode(new Node (15));
myList.printList();


myList.insertAt(0 , new Node(19));
myList.insertAt(3,new Node(21));
myList.insertAt(6,new Node(33));
myList.printList();

myList.removeFrom(0);
myList.printList();