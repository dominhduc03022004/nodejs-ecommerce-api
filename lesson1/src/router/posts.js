import { Router } from "express";

const postRouter = Router();

postRouter.get('/', (req, res) => {
    res.send("Post");
})

//endpoint : api/posts/greet
postRouter.get("/greet", (req,res) => {
    const name = req.query.name;
    res.send(`Xin chào, ${name}!`)
})

postRouter.get("/sum", (req,res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send(`Tong ${a} + ${b} = ${a+b}`)
})

export default postRouter;