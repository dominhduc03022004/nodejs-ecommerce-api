import { Router } from "express";

const postRouter = Router();

let posts = [
  {
    id: 1,
    title: "Sach lam ngheo",
    author: "duc do minh",
    content: "Bien nhung nguoi giau thanh nguoi ngheo",
    page: 333,
    sanxuat: 2025,
  },
  {
    id: 2,
    title: "Sach lam giau",
    author: "duc do minh",
    content: "Bien nhung nguoi ngheo thanh nguoi giau",
    page: 333333,
    sanxuat: 2025,
  },
];

postRouter.get("/", (req, res) => {
  console.log(req.body);
  res.json(posts);
});

postRouter.post("/", (req, res) => {
  const newPost = {...req.body};
  posts.push(newPost)
  res.json(newPost)
});

postRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id == id);
  res.json(post);
});

postRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((p) => p.id == id);
  console.log(index);
  posts[index] = { ...posts[index], ...req.body };
  res.json(posts[index]);
});

postRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((p) => p.id == id);
  const deleted = posts.splice(index, 1);
  res.json(deleted[0]);
});

export default postRouter;
