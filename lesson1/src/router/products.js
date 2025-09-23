import { Router } from "express";

const productRouter = Router();

productRouter.get('/products', (req, res) => {
    res.send("Products!!")
})

export default productRouter;