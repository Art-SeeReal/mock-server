import express from "express";
import portfoliosData from "../data/portfoliosData.js";
import recruitsData from "../data/recruitsData.js";

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
  const fields = req.query.fields;
  const areas = req.query.areas;
  const query = req.query.query;
  const results = recruitsData.results;
  console.log(query);
  try {
    let filteredResults = results;
    // 첫 번째 필터링: 분야
    if (fields) {
      filteredResults = results.filter((recruit) =>
        fields.includes(recruit.fields.code)
      );
    }

    // 두 번째 필터링: 지역
    if (areas) {
      filteredResults = filteredResults.filter((recruit) =>
        areas.includes(recruit.areas.code)
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
  const results = recruitsData.results.find((item) => item.id === artistId);
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

router.post("/", (req, res) => {
  console.log(req.body);
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
