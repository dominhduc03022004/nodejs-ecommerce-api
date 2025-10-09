import { Router } from "express";
import {
  addAuthor,
  deleteAuthor,
  getAuthorById,
  getAuthors,
  updateAuthor,
} from "../controllers/author";

const authorRouter = Router();

authorRouter.get("/", getAuthors);

authorRouter.get("/:id", getAuthorById);

authorRouter.post("/", addAuthor);

authorRouter.delete("/:id", deleteAuthor);

authorRouter.put("/:id", updateAuthor);

export default authorRouter;
