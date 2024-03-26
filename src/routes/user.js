import express from "express";
const router = express.Router();
import users from "../data/users.js";

router.get("/types", (req, res, next) => {
  try {
    res.json({
      results: [
        { code: "AUTHOR", label: "예술가" },
        { code: "PLANNER", label: "기획자" },
      ],
    });
  } catch (err) {
    next(err);
  }
});

router.get("/exist/user-id", (req, res, next) => {
  try {
    const searchUser = users.find((user) => user.userId === req.query.userId);
    res.json({ available: searchUser ? false : true });
  } catch (err) {
    next(err);
  }
});

router.get("/exist/nickname", (req, res, next) => {
  try {
    const searchUser = users.find(
      (user) => user.nickname === req.query.nickname
    );
    res.json({ available: searchUser ? false : true });
  } catch (err) {
    next(err);
  }
});

router.get("/exist/email", (req, res, next) => {
  try {
    const searchUser = users.find((user) => user.email === req.query.email);
    res.json({ available: searchUser ? false : true });
  } catch (err) {
    next(err);
  }
});

export default router;
