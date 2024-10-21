dijkstra = require("./product-recommendations.js")

test("dijkstra", () => {
  let graph = [
    [0, 2, 0, 1, 0],
    [2, 0, 3, 0, 0],
    [0, 3, 0, 4, 0],
    [1, 0, 4, 0, 5],
    [0, 0, 0, 5, 0],
  ]
  startProduct = 0

  expect(dijkstra(graph, startProduct)).toStrictEqual([0, 2, 5, 1, 6])
})