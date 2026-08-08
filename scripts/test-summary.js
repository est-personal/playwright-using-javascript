const fs = require('fs');

const report = JSON.parse(
  fs.readFileSync('test-results/results.json', 'utf8')
);

const folders = {};

function processSuite(suite) {
  if (suite.specs) {
    for (const spec of suite.specs) {
      // // tests doesn't contain folders
      // const folder = spec.file
      //   .split(/[/\\]/)
      //   .pop()
      //   .replace('.spec.js', '');
      // tests contains folders
      // const pathParts = spec.file.split(/[/\\]/);
      // const folder =
      //   pathParts[pathParts.length - 2] || 'unknown';
      const path = require('path');
      const folder = path.basename(
        path.dirname(spec.file)
      );
      const specName = path.basename(
        spec.file,
        '.spec.js'
      );
      const key = `${folder}/${specName}`;

      if (!folders[folder]) {
        folders[folder] = {
          total: 0,
          passed: 0,
          failed: 0,
          flaky: 0
        };
      }

      for (const test of spec.tests) {
        folders[folder].total++;

        console.log(JSON.stringify(test, null, 2));

        const statuses = test.results?.map(r => r.status) || [];

        console.log('Test:', test.title);
        console.log('Statuses:', statuses);

        const hasFailed = statuses.includes('failed');
        const hasPassed = statuses.includes('passed');

        if (hasFailed && hasPassed) {
          folders[folder].flaky++;
        } else if (hasFailed) {
          folders[folder].failed++;
        } else if (hasPassed) {
          folders[folder].passed++;
        }
      }
    }
  }

  if (suite.suites) {
    suite.suites.forEach(processSuite);
  }
}

report.suites.forEach(processSuite);

// Generate Slack-friendly aligned output
let output = '';

for (const [folder, stats] of Object.entries(folders)) {
  output += `📁 ${folder.padEnd(12)}\n`;
  output += `🧪 Total: ${stats.total}\n`;
  output += `✅ Passed: ${String(stats.passed).padEnd(3)}\n`;
  output += `❌ Failed: ${String(stats.failed).padEnd(3)}\n`;
  output += `⚠️ Flaky: ${String(stats.flaky).padEnd(3)}\n\n`;
}

console.log(output);

fs.writeFileSync('folder-summary.txt', output);