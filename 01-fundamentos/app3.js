const fs = require("fs");

const content = fs.readFileSync("README.md", "utf8");

const wordCount = content.split(" ");
// console.log(wordCount);

// const reactWorldCount = content.split("React").length;

// const reactWorldCount = wordCount.filter((wordCount) =>
//  wordCount.toLowerCase().includes("react")
//).length;

const reactWorldCount = content.match(/react/gi ?? []).length;

console.log("Palabras:", wordCount.length);
console.log("Palabras React:", reactWorldCount);
