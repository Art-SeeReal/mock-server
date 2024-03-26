import multer from "multer";

export const generateStr = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  const charactersLength = characters.length;

  Array.from({ length }).forEach(() => {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  });

  return result;
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "static/uploads/");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/").pop();
    const covertedFilename = `${generateStr(10)}.${ext}`;

    cb(null, covertedFilename);
  },
});

export const fileSize = 1024 * 1024 * 5;

export const upload = multer({
  storage,
  limits: { fileSize },
});
