import express from "express";
import { upload, fileSize } from "../modules/upload.js";
import multer from "multer";

const router = express.Router();

router.get("/areas", (req, res, next) => {
  try {
    res.json({
      results: [
        { code: "I000", label: "서울" },
        { code: "B000", label: "경기" },
        { code: "K000", label: "인천" },
        { code: "G000", label: "대전" },
        { code: "1000", label: "세종" },
        { code: "O000", label: "충남" },
        { code: "P000", label: "충북" },
        { code: "E000", label: "광주" },
        { code: "L000", label: "전남" },
        { code: "M000", label: "전북" },
        { code: "F000", label: "대구" },
        { code: "D000", label: "경북" },
        { code: "H000", label: "부산" },
        { code: "J000", label: "울산" },
        { code: "C000", label: "경남" },
        { code: "A000", label: "강원" },
        { code: "N000", label: "제주" },
      ],
    });
  } catch (err) {
    next(err);
  }
});

router.post(
  "/upload",
  (req, res, next) => {
    upload.single("file")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // multer에서 발생한 에러 처리
        if (err.code === "LIMIT_FILE_SIZE") {
          return res
            .status(400)
            .json({ message: "파일 크기가 허용된 최대 크기를 초과했습니다." });
        }
      } else if (err) {
        // 기타 에러 처리
        return res
          .status(500)
          .json({ message: "파일 업로드 중 오류가 발생했습니다." });
      }

      // 파일이 허용된 크기 이내일 경우 다음 미들웨어로 전달
      next();
    });
  },
  (req, res, next) => {
    const fileUrl = `http://localhost:3001/${req.file.path}`;
    res.json({ fileUrl });
  }
);

export default router;
