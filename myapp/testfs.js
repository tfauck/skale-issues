#!/usr/bin/env node

var sc = require('skale-engine').context();
var fs = require("fs");

sc.parallelize(
[
console.log("Going to get file info!")
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats)
   console.log("Got file info successfully!")
   
   // Check file type
   console.log("isFile ? " + stats.isFile())
   console.log("isDirectory ? " + stats.isDirectory())
});
])
  .collect()
  .on('data', console.log)
  .on('end', sc.end);
