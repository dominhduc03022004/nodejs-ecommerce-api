import { Router } from "express";
import { getProfileUser, signIn, signUp } from "../controllers/auth";

const routerAuth = Router()

routerAuth.post("/signup", signUp)
routerAuth.post("/signin", signIn)
routerAuth.get("/profile", getProfileUser)

export default routerAuth;