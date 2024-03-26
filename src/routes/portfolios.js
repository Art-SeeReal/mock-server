import express from "express";
import portfoliosData from "../data/portfoliosData.js";

const router = express.Router();

router.get("/latest", (req, res, next) => {
  try {
    res.json({
      results: portfoliosData.results.slice(0, 6).map((item) => ({
        id: item.id,
        imageUrl: item.imageUrl,
        title: item.title,
      })),
      count: 6,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/", (req, res, next) => {
  const page = parseInt(req.query.page);
  const results = portfoliosData.results.slice(0, page);
  try {
    res.json({
      results,
      count: page,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res) => {
  const artistId = parseInt(req.params.id, 10);
  const results = portfoliosData.results.find((item) => item.id === artistId);
  res.json(results);
});

router.put("/:id", async (req, res) => {
  const artistId = parseInt(req.params.id, 10);
  const updatedData = req.body;
  //업데이트 데이터
  console.log(artistId, updatedData);
  res.json({ success: true });
});

router.delete("/:id", (req, res) => {
  res.json({ success: true });
});

export default router;
