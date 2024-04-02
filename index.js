import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import login from "./src/routes/login.js";
import signup from "./src/routes/signup.js";
import user from "./src/routes/user.js";
import portfolios from "./src/routes/portfolios.js";
import recruits from "./src/routes/recruits.js";
import banners from "./src/routes/banners.js";
import utils from "./src/routes/utils.js";

const app = express();

// static path set
app.use("/static", express.static("static"));

// body parser set
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors set
app.use(
  cors({
    origin: "*",
  })
);

app.use("/login", login);
app.use("/signup", signup);
app.use("/user", user);
app.use("/portfolios", portfolios);
app.use("/recruits", recruits);
app.use("/banners", banners);
app.use("/utils", utils);

app.get("*", (req, res) => {
  res.status(404).json({ message: "404 Not found" });
});

app.listen(3001);
