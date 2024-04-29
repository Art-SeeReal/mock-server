import express from "express";
const router = express.Router();
import users from "../data/users.js";

router.get("/:userId/type", (req, res, next) => {
  try {
    const user = users.find((user) => user.userId === req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "없는 회원입니다." });
    }

    return res.json({ userType: user.userType });
  } catch (err) {
    next(err);
  }
});

router.get("/:userId/profile", (req, res, next) => {
  try {
    const user = users.find((user) => user.userId === req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "없는 회원입니다." });
    }

    return res.json({
      nickname: user.nickname,
      email: user.email,
      phone: user.phone,
      intro: user.intro,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
