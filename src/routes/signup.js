import express from "express";
const router = express.Router();

router.post("/", (req, res, next) => {
  try {
    res.json({ message: "success" });
  } catch (err) {
    next(err);
  }
});

export default router;
