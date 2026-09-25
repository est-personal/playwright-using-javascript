const fs = require("fs");

const browser =
  process.env.BROWSER || "unknown";

const metrics = JSON.parse(
  fs.readFileSync("slack-metrics.json", "utf8")
);

const historyFile =
  "metrics/browser-history.json";

let history = [];

if (fs.existsSync(historyFile)) {
  history = JSON.parse(
    fs.readFileSync(historyFile, "utf8")
  );
}

history.push({
  date: new Date().toISOString(),
  browser,
  passRate: metrics.passRate,
  total: metrics.total,
  failed: metrics.failed,
  flaky: metrics.flaky,
});

fs.writeFileSync(
  historyFile,
  JSON.stringify(history, null, 2)
);

console.log(
  `Saved history for ${browser}`
);
