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
    dfs(start){
       
       const result = [];    // List to store the BFS result
       const visited ={}; //Object to mark visited vertices
       const adjacencyList = this.adjacencyList;

        (function dfsRecursion(vertex){
            if(!vertex)return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => { // Visit adjacent vertices
                if (!visited[neighbor]) {
                    return dfsRecursion(neighbor);  // Recurse on the adjacent vertex
                }
        });

    })(start);
             
        
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