const fs = require("fs");

const bioData = {
  name: "chinmay",
  age: 24,
  state: "odisha",
};
// to convert object to json
// const jsonData = JSON.stringify(bioData)
// console.log(jsonData)

// to convert json to object
// const objData = JSON.parse(jsonData)
// console.log(objData)

const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err) => {
  console.log("Done");
});

console.log(
  fs.readFile("json1.json", "utf-8", (err, data) => {
    console.log(data);
    console.log(JSON.parse(data));
  })
);
