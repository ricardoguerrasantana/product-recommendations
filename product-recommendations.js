function dijkstra(graph, startProduct) {
  let n = graph.length // Number of nodes in the graph
  let minDistances = new Array(n).fill(Infinity) // Array to store the minimum distances from startProduct to each node, initialized to Infinity
  let visited = new Array(n).fill(false) // Array to track if a node has been visited, initialized to false

  minDistances[startProduct] = 0 // The distance to the starting node is set to 0

  // Main loop: Iterate n times to find the shortest path to each node
  for (let i = 0; i < n; i++) {
    let minIndex = -1 // Index of the node with the minimum distance that has not been visited yet

    // Find the unvisited node with the smallest distance
    for (let j = 0; j < n; j++) {
      if (
        !visited[j] &&
        (minIndex === -1 || minDistances[j] < minDistances[minIndex])
      ) {
        minIndex = j // Update minIndex to the current node
      }
    }

    // If the smallest distance is Infinity, the remaining nodes are unreachable
    if (minDistances[minIndex] === Infinity) {
      break // Exit the loop if there are no more reachable nodes
    }

    // Mark the current node as visited
    visited[minIndex] = true

    // Update the minimum distances for neighboring nodes
    for (let j = 0; j < n; j++) {
      if (graph[minIndex][j] !== 0) {
        // Check if there is an edge between minIndex and j
        let potentialDist = minDistances[minIndex] + graph[minIndex][j] // Calculate the potential new distance to node j
        if (potentialDist < minDistances[j]) {
          // If the new distance is smaller than the recorded distance
          minDistances[j] = potentialDist // Update the minimum distance to node j
        }
      }
    }
  }
  // Return the array of minimum distances from the startProduct to each node
  return minDistances
}

module.exports = dijkstra
