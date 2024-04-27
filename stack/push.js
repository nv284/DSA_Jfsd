
class stack{
    // array to store the values 
    // constructor to initialize the stack object 
    constructor()
    {
        this.array = [];
    }
    push(element)
{
    this.array.push(element) // adding new element to the array 
}
pop()
{
    if(this.array.length == 0)
    {
        console.log("Stack is empty");
    }
    else
    {
        return this. array.pop();
    }
}
peek()
{
    
    if(this.array.length == 0)
    {
        console.log("Stack is empty");
    }
    else
    {
        return this.array[this.array.length-1];
    }
}
isEmpty()
{
   
    if(this.array.length == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
printStack()
{    
    // printing stack elements from last element to first element 
    for(var i = this.array.length-1; i>=0; i--)
    {
        console.log(this.array[i]);
    }
}
}
let stack_obj = new stack();
stack_obj.push(5);
stack_obj.printStack()

console.log(stack_obj.peek());
stack_obj.pop();
stack_obj.printStack();
stack_obj.isEmpty();

