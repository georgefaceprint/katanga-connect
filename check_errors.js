import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', err => {
    errors.push(err.message);
  });
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' });
  
  if (errors.length > 0) {
    console.log("ERRORS FOUND:");
    console.log(errors.join('\n'));
  } else {
    console.log("No console errors found.");
  }
  
  await browser.close();
})();
