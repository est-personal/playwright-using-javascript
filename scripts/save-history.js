const fs = require("fs");

const historyFile = "metrics/history.json";

const summary = JSON.parse(
  fs.readFileSync("summary.json", "utf8")
);

let history = [];

if (fs.existsSync(historyFile)) {
  history = JSON.parse(
    fs.readFileSync(historyFile, "utf8")
  );
}

history.push({
  date: summary.date,
  total: summary.total,
  passed: summary.passed,
  failed: summary.failed,
  flaky: summary.flaky,
  skipped: summary.skipped,
  passRate: summary.passRate,
  duration: summary.duration,
  durationSeconds: summary.durationSeconds,
  browser: process.env.BROWSER || 'chromium'
});

fs.writeFileSync(
  historyFile,
  JSON.stringify(history, null, 2)
);

console.log("History Updated");