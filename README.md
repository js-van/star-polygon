star-polygon
============
Generates a regular [star polygon](http://en.wikipedia.org/wiki/Star_polygon).  

## Example

```javascript
console.log(require("star-polygon")(5, 2))

//Prints:
//
//  [[0,2], [2,4], [4,1], [1,3], [3,0]]
//
```

## Install

    npm install star-polygon

### `require("star-polygon")(n, k)`
Generates a star polygon.

* `n` is the number of vertices
* `k` is the step size between vertices

**Returns** A list of edges

## Credits
(c) 2013 Mikola Lysenko. MIT License