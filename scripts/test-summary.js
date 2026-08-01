const fs = require('fs');

const report = JSON.parse(
  fs.readFileSync('test-results/results.json', 'utf8')
);

const folders = {};

function processSuite(suite) {
  if (suite.specs) {
    for (const spec of suite.specs) {
      const folder = spec.file
        .split(/[/\\]/)
        .pop()
        .replace('.spec.js', '');

      if (!folders[folder]) {
        folders[folder] = {
          passed: 0,
          failed: 0,
          flaky: 0
        };
      }

      // for (const test of spec.tests) {
      //   const result = test.results?.[test.results.length - 1];

      //   console.log('Test:', test.title);
      //   console.log('Outcome:', test.outcome);
      //   console.log('Final Status:', result?.status);

      //   // Playwright flaky detection
      //   if (
      //     test.outcome === 'flaky' ||
      //     test.outcome?.() === 'flaky'
      //   ) {
      //     folders[folder].flaky++;
      //   } else if (result?.status === 'passed') {
      //     folders[folder].passed++;
      //   } else if (result?.status === 'failed') {
      //     folders[folder].failed++;
      //   }
      // }
      for (const test of spec.tests) {

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
  output += `✅ Passed: ${String(stats.passed).padEnd(3)}\n`;
  output += `❌ Failed: ${String(stats.failed).padEnd(3)}\n`;
  output += `⚠️ Flaky: ${String(stats.flaky).padEnd(3)}\n\n`;
  // output += `${folder.padEnd(12)} ✅ Passed: ${String(stats.passed).padEnd(3)} ❌ Failed: ${String(stats.failed).padEnd(3)} ⚠️ Flaky: ${String(stats.flaky).padEnd(3)}\n`;
}

console.log(output);

fs.writeFileSync('folder-summary.txt', output);