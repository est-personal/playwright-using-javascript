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
  date: new Date().toISOString().split("T")[0],
  total: summary.total,
  passed: summary.passed,
  failed: summary.failed,
  flaky: summary.flaky,
  skipped: summary.skipped,
  passRate:
    ((summary.passed + summary.flaky) /
      summary.total) *
    100,
  duration: process.env.DURATION
});

fs.writeFileSync(
  historyFile,
  JSON.stringify(history, null, 2)
);

console.log("History Updated");