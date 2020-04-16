# README

How different parsers treat @typedef JSDoc comments.

- espree & @babel/parser create a top-level comments array that contains all the comments. It's up to the consumer to match those comments with the corresponding node.

- typescript attaches the comments to the nodes. Free JSDoc comments are attached to the next node (although it doesn't belong to it).

The typescript behaviour is both great and problematic:

- It's great because it saves the consumers from having to do the work of matching comments to nodes, so they can use them right away.

- It's problematic because you don't know to which node potential "free" comments (usually @typedef definitions) are attached to, so you have to parse them. Is there an typescript API to deal with these?
