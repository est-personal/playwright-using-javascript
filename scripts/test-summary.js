const fs = require('fs');

const report = JSON.parse(
  fs.readFileSync('test-results.json', 'utf8')
);

const folders = {};

function processSuite(suite) {
  if (suite.specs) {
    for (const spec of suite.specs) {

    //   const parts = spec.file.split(/[/\\]/);

    //   // Example:
    //   // tests/buttons/buttons.spec.js
    //   // Folder = buttons

    //   const folder = parts.length >= 2
    //     ? parts[parts.length - 2]
    //     : 'root';

    const folder = spec.file
        .split(/[/\\]/)
        .pop()
        .replace('.spec.js', '');

    console.log('File:', spec.file);
    console.log('Group:', folder);

      if (!folders[folder]) {
        folders[folder] = {
          passed: 0,
          failed: 0,
          flaky: 0
        };
      }

      for (const test of spec.tests) {
        const outcome = test.outcome;

        if (outcome === 'expected') {
          folders[folder].passed++;
        }

        if (outcome === 'unexpected') {
          folders[folder].failed++;
        }

        if (outcome === 'flaky') {
          folders[folder].flaky++;
        }
      }
    }
  }

  if (suite.suites) {
    suite.suites.forEach(processSuite);
  }
}

report.suites.forEach(processSuite);

let output = '';

for (const [folder, stats] of Object.entries(folders)) {
  output += `📁 ${folder}\n`;
  output += `✅ Passed: ${stats.passed}\n`;
  output += `❌ Failed: ${stats.failed}\n`;
  output += `⚠️ Flaky: ${stats.flaky}\n\n`;
}

console.log(output);

fs.writeFileSync('folder-summary.txt', output);