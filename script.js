//dijkstra Algorithm

function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = [];

    // Initialize distances with Infinity and add the start vertex with distance 0
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    // Add the start vertex to the queue
    queue.push(start);

    // Main loop
    while (queue.length) {
        // Get the vertex with the smallest distance from the queue
        let minVertex = queue.shift();
        visited[minVertex] = true;

        // Explore neighbors
        for (let neighbor in graph[minVertex]) {
            let weight = graph[minVertex][neighbor];
            let totalDistance = distances[minVertex] + weight;

            // Update distance if shorter path is found
            if (totalDistance < distances[neighbor]) {
                distances[neighbor] = totalDistance;

                // Add the neighbor to the queue if not visited yet
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return distances;
}

const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

// Test
console.log(dijkstra(graph, 'B'));
