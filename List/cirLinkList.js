class Node{
 constructor(value){
    this.value=value;
    this.next = null;
 }
}
class CircularLinkList{
constructor(){
    this.head = null;
    this.tail = null;
    this.size=0;
}
  insert(data){
    const node = new Node(data);
    if(!this.node){
        this.head = node;
        this.tail = node;
        this.tail.next = this.head;
    }
    else{
        node.next=this.node;
        this.head = node;
      this.tail.next = this.head;
    }
    this.size++;
  }
  delete(){
    if(!this.node){
        console.log("List is empty");
        return ;
    }
    if(this.size===1){
        this.head=null;
        this.tail=null;

    }else{
        this.head=this.head.next;
        this.tail.next = this.next;
    }
    this.size --;
  }
  display(){
    if(!this.head){
        console.log("List is empty");
        return;
    }
    let current = this.head;
    do{
       console.log(current.data);
       current = current.next;
    }while(current !== this.head);
  }
}
const myList = new CircularLinkList();
myList.insert("apple");
myList.insert("banana");
myList.insert("cherry");
myList.display();
