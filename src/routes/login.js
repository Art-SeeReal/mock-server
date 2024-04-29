import express from "express";
const router = express.Router();
import users from "../data/users.js";

router.post("/", (req, res, next) => {
  try {
    const user = users.find(
      (user) =>
        user.userId === req.body.userId && user.password === req.body.password
    );
    if (!user) {
      return res
        .status(401)
        .json({ message: "아이디 또는 비밀번호를 다시 확인해 주세요." });
    }

    res.json({
      token: user.token,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
