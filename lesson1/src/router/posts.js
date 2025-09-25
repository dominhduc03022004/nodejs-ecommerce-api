import { Router } from "express";

import { getPosts, getPostById, addPost, updatePost, deletePost } from "../controller/post";

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

postRouter.get("/", getPosts);

postRouter.post("/add", addPost);

postRouter.get("/detail/:id", getPostById);

postRouter.put("/update/:id", updatePost);

postRouter.delete("/delete/:id", deletePost);

export default postRouter;
