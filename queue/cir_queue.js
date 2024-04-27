class CircularQ{
    constructor(size){
        this.data = [];
        this.size = size;
        this.length = 0;
        this.front = 0;
        this.rear = -1;
    }
    isEmpty(){ return (this.length==0);}
    enqueue(element){
        if(this.length >= this.size)
          console.log("Full");
        ////rear=(rear+1)%size;  
        this.data[(this.rear+1)%this.size] = element ;
        this.length++;
    }
    print()
  {
    if(this.front==-1){console.log('Queue is Empty');return;}
    /*for(let i=0;i<this.data.length;i++)
    {
      console.log([this.data[i]]);
      
    }*/
   
    if(this.rear>=this.front){
        for(let i=this.front;i<=this.rear;i++)
            console.log(this.data[i]);
    }else{
        for(let i=this.front;i<this.size;i++)
        console.log(this.data[i]);
       for(let i=0;i<this.rear;i++)
        console.log(this.rear[i]);
    }
  }
    getFront(){
        if(this.isEmpty()){
            console.log("no element in circular queue");
        }
        return this.data[(this.front)%(this.size)];
    }
    dequeue(){
        if(this.isEmpty())
            console.log("no element");
        const value = this.getFront();
        this.data[this.front%this.size]=null;
        this.front++;
        this.length--;
        console.log(value);
    }
}
cq = new CircularQ(5);
cq=new CircularQ(5);
cq.enqueue(10);
cq.enqueue(15);
cq.enqueue(16);
cq.enqueue(17);
cq.enqueue(18);
cq.print();
console.log("deleted element ");
cq.dequeue();