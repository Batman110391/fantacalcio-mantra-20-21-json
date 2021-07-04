const fs = require("fs");
csv = fs.readFileSync("mantra.csv");

var array = csv.toString().split("\r");

let result = [];

let headers = array[0].split(",");

for (let i = 1; i < array.length - 1; i++) {
  let obj = {};

  let str = array[i].split(",");

  for (let j in headers) {
    obj[headers[j]] = str[j].trim();
  }

  result.push(obj);
}

let json = JSON.stringify(result);
fs.writeFileSync("mantra.json", json);
