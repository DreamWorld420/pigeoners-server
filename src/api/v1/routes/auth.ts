import express from "express";
import controller from "@/api/v1/middlewares/auth";

const router = express.Router();

router.route("/signup").post(controller.signup);

export default router;
