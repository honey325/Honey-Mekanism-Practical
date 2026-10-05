import Router from "express";
import userRouter from "./user.router.js";
import bookRouter from "./book.router.js";
import authRouter from "./auth.router.js";

const router = Router();

router.use("/user", userRouter);
router.use("/book", bookRouter);
router.use("/auth", authRouter);

router.get("/", (req, res) => {
    res.json("server is working")
})
export default router;