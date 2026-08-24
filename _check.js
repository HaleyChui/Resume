const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  const errs=[]; p.on('pageerror',e=>errs.push(e.message));
  await p.goto('file://'+process.cwd()+'/resume-ai-agent.html');
  await p.waitForTimeout(400);
  const card3 = await p.$eval('#projects .cards .card:last-child p', e=>e.textContent.slice(0,60));
  const skillCount = await p.$$eval('#skills .skill-group:first-child .tag', els=>els.length);
  console.log('card3:', card3);
  console.log('LLM/Agent tag count:', skillCount);
  console.log('pageErrors:', JSON.stringify(errs));
  await b.close();
})();
