import express from "express";
import portfoliosData from "../data/portfoliosData.js";
import { getUserToken } from "../utils/utils.js";

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
  res.json({ message: "success" });
});

router.get("/", (req, res, next) => {
  const page = parseInt(req.query.page);
  const fields = req.query.fields;
  const query = req.query.query;
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

  if (!results) {
    return res.status(404).json({ message: "없는 포트폴리오 게시글입니다." });
  }
  res.json(results);
});

router.put("/:id", async (req, res) => {
  const artistId = parseInt(req.params.id, 10);
  const updatedData = req.body;
  res.json({ message: "success" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "success" });
});

router.post("/:id/scrap", (req, res) => {
  const userToken = getUserToken(req.headers.authorization);

  if (!userToken) {
    return res.status(401).json({ message: "로그인 후 이용해 주세요." });
  }

  res.json({ message: "success" });
});

router.delete("/:id/scrap", (req, res) => {
  const userToken = getUserToken(req.headers.authorization);

  if (!userToken) {
    return res.status(401).json({ message: "로그인 후 이용해 주세요." });
  }

  res.json({ message: "success" });
});

export default router;
