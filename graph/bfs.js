class Graph {
    constructor(){
        this.adjacencyList = {};//storing vertices and thier nebiroing node 
    }
    addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }


    addEdge(vertex1 , vertex2){
       this.adjacencyList[vertex1].push(vertex2);
       this.adjacencyList[vertex2].push(vertex1);
    }
    bfs(start){
       const queue =[start]; // Array to use as a queue for BFS traversal
       const result = [];    // List to store the BFS result
       const visited ={}; //Object to mark visited vertices
       let currentVertex;   // Variable to hold the current vertex being processed

        visited[start] = true; // Mark the starting vertex as visited

        while(queue.length){
            currentVertex = queue.shift();  // Take the first vertex from the queue
            result.push(currentVertex);     // Add it to the BFS result list

             // Visit all neighbors of the current vertex
             this.adjacencyList[currentVertex].forEach(neighbor =>{
                if(!visited[neighbor]){
                    visited[neighbor]=true;  //Mark neighbor as visited
                    queue.push(neighbor);     // add the neighbour to the queue
                }
             });
        }
             return  result;           // Return the BFS result
    }
}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.bfs("A"));