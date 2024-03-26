import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({
      results: [
        {
          id: 1,
          imageUrl: "http://localhost:3001/static/images/banners/01.jpg",
        },
        {
          id: 2,
          imageUrl: "http://localhost:3001/static/images/banners/02.jpg",
        },
        {
          id: 3,
          imageUrl: "http://localhost:3001/static/images/banners/03.jpg",
        },
      ],
      count: 3,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
