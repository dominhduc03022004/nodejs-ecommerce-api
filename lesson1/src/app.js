import express from "express";

const app = express();

// Định nghĩa route GET/
// app = experess()
// .get : Method HTTP: GET
// '/': endpoint API - URL
// function(req, res) :
// req: du lieu gui tu client(frontend)
// res: du lieu server tra ve cho client(FE)

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.get("/api/posts/greet", (req, res) => {
    const name = req.query.name;
    res.send(`Xin chào, ${name}!`)
})

app.get("/api/posts/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send(`Tong ${a} + ${b} = ${a+b}`)
})

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});