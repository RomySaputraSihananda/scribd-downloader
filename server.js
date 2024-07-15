import express from "express";
import { app } from "./src/App.js";
const route = express();
const port = 4545
route.get("/api/v1/skibidi", async (req, res) => {
  const { url, flag } = req.query;
  try {
    res.status(200).sendFile(`/${await app.execute(url, flag)}`, { root: "." });
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

route.listen(port, () => console.log(`http://0.0.0.0:${port}`));
