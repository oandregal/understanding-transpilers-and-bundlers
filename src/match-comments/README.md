# README

How could we match nodes with comments?

The parser gives us data about the start/ending characters for each node and comment such as, in the example we have:

- 0, 73 => typedef comment
- 135, 243 => first function comment
- 244, 317 => first function
- 319, 428 => second function comment
- 429, 496 => second function
- 498, 528 => export statement
- 77, 133 => utility function

A simple heuristic could be: attach comments to nodes that are consecutive. Consecutive meaning that the ending character of the comment = starting character of the node -1.
