# Dijkstra Algorithm for Product Recommendations

This repository contains a JavaScript implementation of Dijkstra's algorithm, tailored for product recommendation purposes in an e-commerce setting. The algorithm calculates the shortest paths (minimum distances) from a specified starting product to all other products in a graph, based on their similarity scores.

## Overview

Dijkstra's algorithm is a famous algorithm used for finding the shortest path between nodes in a graph, which may represent, for example, road networks. This implementation works with an adjacency matrix, where each entry represents the weight of the edge (or similarity score) between two nodes.

## Features

- **Product Recommendations**: Uses similarity scores between products to avoid recommending overly similar items.
- **Graph Representation**: Products are represented as nodes in a graph, with edges indicating similarity scores.
- **Adaptability**: This implementation can be used in various graph-based recommendation systems beyond e-commerce.

## Algorithm Explanation

The algorithm works as follows:

1. Initializes an array to keep track of the minimum distances to each node, starting with the given node at a distance of zero and all other nodes at infinity.
2. Iteratively selects the unvisited node with the smallest known distance.
3. Updates the distances to all of the unvisited neighboring nodes based on the selected node's distance.
4. Marks the selected node as visited and repeats the process until all nodes are visited or all reachable nodes have been processed.

The result is an array of minimum distances from the starting node to each other node.

## Function

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

## Usage

### Prerequisites

- Node.js installed on your system

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ricardoguerrasantana/product-recommendations.git
   cd product-recommendations
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Algorithm

The function can be imported and run in a JavaScript file as follows:

```javascript
const dijkstra = require('./dijkstra');

let graph = [
    [0, 2, 0, 1, 0],
    [2, 0, 3, 0, 0],
    [0, 3, 0, 4, 0],
    [1, 0, 4, 0, 5],
    [0, 0, 0, 5, 0]
];

let startProduct = 0;
let distances = dijkstra(graph, startProduct);
console.log("Minimum distances from product", startProduct, ":", distances);
```

### Example Output

Running the above code will produce an output showing the minimum distances from the `startProduct` to each other product.

```plaintext
Minimum distances from product 0: [0, 2, 5, 1, 6]
```

### Testing

This project includes a basic test. Run test with:

```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions for improvements.

---

Happy coding!