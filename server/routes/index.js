var express = require("express");
const puppeteer = require("puppeteer");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/result", async (req, res) => {
  const { param } = req.query;
  try {
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      // 设置popup-con的display:none
      await page.goto("https://ai.bo-e.com/");
      await page.evaluate(() => {
        document.querySelector(".popup-con").style.display = "none";
      });

      let previousResults = [];
      let currentResults = [];
      await page.type("textarea", param);
      await page.keyboard.press("Enter");
      await page.waitForTimeout(1000);
      // 定义获取结果的函数
      const getResults = async () => {
        currentResults = await page.$$eval(".whitespace-pre-wrap", (elements) =>
          elements.map((element) => element.textContent.trim())
        );
      };
      // 定义定时器
      const interval = setInterval(async () => {
        await getResults();
        // 比较当前结果和上一次结果是否相同
        const isEqual =
          JSON.stringify(currentResults) === JSON.stringify(previousResults);
        // 如果相同，则说明结果已经稳定，可以停止定时器
        if (isEqual) {
          clearInterval(interval);
          console.log("Results stabilized:", currentResults[1]);
          res.send(currentResults[1]);
          await browser.close();
        } else {
          // 如果不相同，则将当前结果保存为上一次结果，并继续等待
          previousResults = currentResults;
          console.log("Results not stabilized yet, waiting...");
        }
      }, 5000); // 每隔5秒执行一次

      console.log("Waiting for results to stabilize...");
    })();
  } catch (error) {
    res.status(500).send("Error occurred while scraping data");
  }
});

module.exports = router;
