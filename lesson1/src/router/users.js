import { Router } from "express";

const userRouter = Router();

userRouter.get("/users", (req, res) => {
    res.send("Users!");
})

export default userRouter;