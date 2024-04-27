class Queue{
    constructor(){
        this.data = []; //is the list in which we store our elements
        this.rear = 0 ; // is used to store the position in which the next element will be stored
        this.size = 10 ; //maximum number of elements a queue can have
    
    }
    enqueue(element){
        if(this.rear < this.size){
        this.data[this.rear] = element ;
        this.rear =this.rear +1;}
    }
    length(){
       return this.rear; 
    }
    isEmpty(){
        return this.rear === 0 ;
    }
    getFront(){
        console.log("front element")
        if(this.isEmpty()===false) {return this.data[0];}
    }
    getLast(){
        console.log("last element")
        if(this.isEmpty()===false){
            return this.data[this.rear-1];
        }
    }
    dequeue(){
        console.log("delete element");
        if(this.isEmpty()=== false){
            this.rear = this.rear -1;
            return this.rear.data;
        }
    }
    print(){
        for(let i=0 ;i<this.rear ;i++){
            console.log (this.data[i]);
        }
    }
    clear(){}


}

const q = new Queue();
q.enqueue(3);q.enqueue(4);q.enqueue(5);
q.print();
q.dequeue();
q.print();
q.print(q.getFront());
q.print(q.getLast());
q.print(q.isEmpty());