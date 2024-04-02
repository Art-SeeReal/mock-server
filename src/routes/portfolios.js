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

router.post("/", (req, res) => {
  res.json({ success: true });
});

router.get("/", (req, res, next) => {
  const page = parseInt(req.query.page);
  const fields = req.query.fields;
  const query = req.query.query;
  console.log(query);
  const results = portfoliosData.results;
  try {
    let filteredResults = results;
    if (fields) {
      filteredResults = results.filter((portfolio) =>
        fields.includes(portfolio.fields.code)
      );
    }
    const paginatedResults = filteredResults.slice(0, page);

    res.json({
      results: paginatedResults,
      count: paginatedResults.length,
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

router.post("/:id/scrap", (req, res) => {
  console.log(req.params.id);
  res.json({ success: true });
});

router.delete("/:id/scrap", (req, res) => {
  console.log(req.params.id);
  res.json({ success: true });
});

export default router;
