"use strict"

var scratch = require("scratch")

function makeStar(n, k) {
  var i, u, v, result = [], visit = scratch(n, "uint8")
  for(i=0; i<n; ++i) {
    visit[i] = 0
  }
  for(i=0; i<n; ++i) {
    if(visit[i]) {
      continue
    }
    u = i
    do {
      visit[u] = true
      v = (u + k) % n
      result.push([u, v])
      u = v
    } while(u !== i)
  }
  return result
}

module.exports = makeStar