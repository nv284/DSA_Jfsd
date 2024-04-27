function PriorityQ(){
    let items =[];
    //container 
    function QueueElement(element , priority){
        this.element= element;
        this.priority= priority;
    }
    //add new element 
    this.enqueue =function (element,priority){
        let qelement = new QueueElement(element,priority);

        //to check elemnt 
        let added = false;
        for(let i =0 ; i<items.length ;i++){
            if(qelement.priority > items[i].priority){
                items.splice(i,0,qelement);
                added = true;
                break;
            }
        }
        if(!added) {
            items.push(qelement);
        }
    }
    this.dqueue = ()=>{
        return items.shift();
    }
    this.print = function(){
        for(let i = 0; i < items.length; i++){
          console.log(`${items[i].element} - ${items[i].priority}`);
        }
    }
}
let pq = new PriorityQ();
pq.enqueue("John",2);
pq.enqueue("Jane",1);
pq.enqueue("Ana",3);
pq.enqueue("Tom",4);
pq.enqueue("Mike",1);
pq.print();
pq.dqueue();
pq.print();