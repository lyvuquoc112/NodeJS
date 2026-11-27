import path from "path";

console.log(path.basename("c:\\nodejs\\index.js"));
console.log(path.basename("c:\\nodejs\\app.js", ".js"));
console.log(path.dirname("c:\\nodejs\\app.js"));
console.log(path.extname("c:\\nodejs\\app.js"));
console.log(path.join("c:", "john-doe", "courses", "nodejs"));
console.log(path.join("c:", "john-doe", "courses", "nodejs", ".."));
console.log(path.join("c:", "john-doe", "courses", "nodejs", "..", ".."));

console.log(path.normalize("c:\\coureses\\redux\\store\\features"));
console.log(path.parse("c:\\nodejs\\courses\\app.js"));
console.log(path.parse("c:\\nodejs\\courses\\app.js").base);
console.log(path.parse("c:\\nodejs\\courses\\app.js").name);
console.log(path.parse("c:\\nodejs\\courses\\app.js").ext);
