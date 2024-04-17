import express from "express";
const router = express.Router();
import users from "../data/users.js";
import { userLikeData } from "../data/userData.js";
import { maskLoginId, maskEmail, getUserToken } from "../utils/utils.js";

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

router.get("/userId", (req, res, next) => {
  try {
    const { name, email } = req.query;
    const searchUser = users.find(
      (user) => user.name === name && user.email === email
    );
    if (!searchUser) {
      return res.status(404).json({ message: "가입된 정보가 없습니다." });
    }
    // 아이디는 마스킹 처리 후 내려줌.
    res.json({ userId: maskLoginId(searchUser.userId) });
  } catch (err) {
    next(err);
  }
});

router.get("/exist", (req, res, next) => {
  try {
    const { name, email, userId } = req.query;

    const searchUser = users.find(
      (user) =>
        user.name === name && user.email === email && user.userId === userId
    );

    if (!searchUser) {
      return res.status(404).json({ message: "가입된 정보가 없습니다." });
    }

    // 이메일 인증코드 발송 로직
    // ....
    res.json({ message: "success", email: maskEmail(searchUser.email) });
  } catch (err) {
    next(err);
  }
});

router.post("/cert/email", (req, res, next) => {
  try {
    // 이메일 인증코드 확인 로직
    if (req.body.certCode !== "xxxx") {
      return res.status(400).json({ message: "인증코드가 올바르지 않습니다." });
    }
    res.json({ token: "0000" });
  } catch (err) {
    next(err);
  }
});

router.put("/password", (req, res, next) => {
  try {
    // 토큰 확인 및 패스워드 변경 로직
    // ....
    res.json({ message: "success" });
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

router.get("/like/users", (req, res, next) => {
  try {
    res.json(userLikeData);
  } catch (err) {
    next(err);
  }
});

router.post("/like", (req, res, next) => {
  try {
    const userToken = getUserToken(req.headers.authorization);

    if (!userToken) {
      return res.status(401).json({ message: "로그인 후 이용해 주세요." });
    }

    res.json({ message: "success" });
  } catch (err) {
    next(err);
  }
});

router.delete("/like", (req, res, next) => {
  try {
    const userToken = getUserToken(req.headers.authorization);

    if (!userToken) {
      return res.status(401).json({ message: "로그인 후 이용해 주세요." });
    }

    res.json({ message: "success" });
  } catch (err) {
    next(err);
  }
});

router.get("/", (req, res, next) => {
  try {
    const user = {
      userId: "user0",
      password: "user0000!!",
      email: "user0@gmail.com",
      nickname: "유저0",
      name: "아무개",
      phone: "01012345678",
      regions: [{ code: "I000", label: "서울" }],
      isPrivateEmail: true,
      isPrivatePhone: true,
      userType: "예술가",
    };
    res.json(user);
  } catch (err) {
    next(err);
  }
});

export default router;
