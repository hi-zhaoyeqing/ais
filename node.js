const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();
const port = 9000;

app.use(cors()); // 允许跨域请求

app.get("/result", async (req, res) => {
  const { param } = req.query;
  try {
    (async () => {
      let result = "";
      let lastResult = "";
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      console.log("问题：", param);
      await page.goto(`https://gptgo.ai/?q=${param}`);
      await page.waitForTimeout(1000); // 等待 1 秒
      let waitSeconds = 2;
      console.log(result === lastResult);
      while (
        result.length === 0 ||
        (result[result.length - 1] !== "。" &&
          result[result.length - 1] !== "？" &&
          result[result.length - 1] !== "?" &&
          result[result.length - 1] !== "." &&
          result[result.length - 1] !== "）" &&
          result[result.length - 1] !== ")"&&
          result[result.length - 1] !== "X") ||
        result === lastResult
      ) {
        await page.waitForTimeout(waitSeconds * 1000);
        lastResult = result;
        result = await page.$eval("#ai-result", (el) => el.innerText);
        console.log("等待秒数:", waitSeconds, "结果:", result);
        waitSeconds++;
      }

      res.send(result.replace("GooGPT?", "ChatGPT4"));
      await browser.close();
    })();
  } catch (error) {
    res.status(500).send("Error occurred while scraping data");
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
