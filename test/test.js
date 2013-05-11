"use strict"

var starp = require("../star.js")

require("tap").test("star-polygon", function(t) {
  var p = starp(5, 2)
  t.equals(p.join(":"), "0,2:2,4:4,1:1,3:3,0")
  t.end()
})