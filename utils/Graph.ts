class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: number) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1: number, vertex2: number) {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1);
    }

    getAdjacentVertices(vertex: number): number[] {
        return this.adjacencyList.get(vertex) || [];
    }
}