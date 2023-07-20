/**
 * Represents a basic class for a Graph.
 * TODO: Expand this to use any adjacency list
 */
class Graph {

    // List of adjacent nodes
    //TODO: make this a separate class
    private adjacencyList: Map<number, number[]>;

    /**
     * Creates a new Graph
     */
    constructor() {
        this.adjacencyList = new Map();
    }

    /**
     * Adds a vertex to the graph
     * @param {number} vertex - The vertex being added
     */
    addVertex(vertex: number) {
        this.adjacencyList.set(vertex, []);
    }

    /**
     * Add an edge to a graph's adjacency list
     * @param vertex1 vertex to be added as an edge
     * @param vertex2 vertex to be added as an edge
     */
    addEdge(vertex1: number, vertex2: number) {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1);
    }

    /**
     * Get the adjacent vertices 
     * @param {number} vertex Get the list of adjacent vertices. This should be a node
     * @returns {number[]} - The verte returned
     */
    getAdjacentVertices(vertex: number): number[] {
        return this.adjacencyList.get(vertex) || [];
    }
}