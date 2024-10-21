# Dijkstra's Algorithm in JavaScript

This repository contains an implementation of Dijkstra's algorithm in JavaScript for finding the shortest path in a weighted graph. The algorithm is used to calculate the minimum distances from a starting node to all other nodes in the graph.

## Overview

Dijkstra's algorithm is a famous algorithm used for finding the shortest path between nodes in a graph, which may represent, for example, road networks. This implementation works with an adjacency matrix, where each entry represents the weight of the edge (or similarity score) between two nodes.

### Features

- Finds the shortest path from a given starting node to all other nodes in a graph.
- Handles graphs represented as adjacency matrices.
- Uses a priority-based approach to determine the shortest paths.

## Algorithm Explanation

The algorithm works as follows:

1. Initializes an array to keep track of the minimum distances to each node, starting with the given node at a distance of zero and all other nodes at infinity.
2. Iteratively selects the unvisited node with the smallest known distance.
3. Updates the distances to all of the unvisited neighboring nodes based on the selected node's distance.
4. Marks the selected node as visited and repeats the process until all nodes are visited or all reachable nodes have been processed.

The result is an array of minimum distances from the starting node to each other node.

## Code

The main function `dijkstra` takes two parameters:

- `graph`: An adjacency matrix representing the graph.
- `startProduct`: The index of the starting node.

Here's the code:

```javascript
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
```

## Example Usage

Here is an example of how to use the `dijkstra` function:

```javascript
let graph = [
  [0, 2, 0, 1, 0],
  [2, 0, 3, 0, 0],
  [0, 3, 0, 4, 0],
  [1, 0, 4, 0, 5],
  [0, 0, 0, 5, 0],
]

let startProduct = 0
let result = dijkstra(graph, startProduct)

console.log("Minimum distances from Product 0:", result)
```

Output:

```
Minimum distances from Product 0: [0, 2, 5, 1, 6]
```

## Prerequisites

To run this code, you need:

- A JavaScript environment (Node.js or a browser console).

## Running the Code

1. Clone the repository:
   ```bash
   git clone https://github.com/ricardoguerrasantana/product-recommendations.git
   ```
2. Navigate to the project directory:
   ```bash
   cd product-recommendations
   ```
3. Create an HTML file or use Node.js to run the JavaScript code.

## Contributing

Contributions are welcome! If you have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

- The algorithm is based on Dijkstra's shortest path algorithm, which was developed by Edsger W. Dijkstra.
- The code example demonstrates a basic application of the algorithm for learning purposes.
