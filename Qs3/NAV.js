import * as puppeteer from "puppeteer";

async function scrape() {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto("https://codequiz.azurewebsites.net/");
  await page.$eval("body > input[type=button]", (form) => form.click());

  switch (process.argv.slice(2)[0]) {
    case "B-INCOMESSF":
      var element = await page.waitForSelector(
        "body > table > tbody > tr:nth-child(2) > td:nth-child(2)"
      );
      break;
    case "BM70SSF":
      var element = await page.waitForSelector(
        "body > table > tbody > tr:nth-child(3) > td:nth-child(2)"
      );
      break;
    case "BEQSSF":
      var element = await page.waitForSelector(
        "body > table > tbody > tr:nth-child(4) > td:nth-child(2)"
      );
      break;
    case "B-FUTURESSF":
      var element = await page.waitForSelector(
        "body > table > tbody > tr:nth-child(5) > td:nth-child(2)"
      );
      break;
  }
  var text = await page.evaluate((element) => element.textContent, element);
  console.log(text);
  browser.close();
}
scrape();
