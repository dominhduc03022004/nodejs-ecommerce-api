import express from "express";
import postRouter from "./router/posts";
import userRouter from "./router/users"; 
import productRouter from "./router/products";
const app = express();

// Định nghĩa route GET/
// app = experess()
// .get : Method HTTP: GET
// '/': endpoint API - URL
// function(req, res) :
// req: du lieu gui tu client(frontend)
// res: du lieu server tra ve cho client(FE)

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

// app.use : su dung tien to router: /api/posts
// postRouter: toan bo routing co trong postRouter
// app.use("/posts", postRouter);
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

// app.get("/api/posts/greet", (req, res) => {
//     const name = req.query.name;
//     res.send(`Xin chào, ${name}!`)
// })

// app.get("/api/posts/sum", (req, res) => {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.send(`Tong ${a} + ${b} = ${a+b}`)
// })

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});