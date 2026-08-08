const fs = require('fs');
const path = require('path');
const DEBUG = process.env.DEBUG === 'true';

// const report = JSON.parse(
//   fs.readFileSync('test-results/results.json', 'utf8')
// );
const reportPath = 'test-results/results.json';

if (!fs.existsSync(reportPath)) {
  console.error(`Report not found: ${reportPath}`);
  process.exit(1);
}

const report = JSON.parse(
  fs.readFileSync(reportPath, 'utf8')
);

const folders = {};

const overall = {
  total: 0,
  passed: 0,
  failed: 0,
  flaky: 0,
  skipped: 0
};

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
      const folder = path.basename(
        path.dirname(spec.file)
      );
      // const specName = path.basename(
      //   spec.file,
      //   '.spec.js'
      // );
      // const key = `${folder}/${specName}`;

      if (!folders[folder]) {
        folders[folder] = {
          total: 0,
          passed: 0,
          failed: 0,
          flaky: 0,
          skipped: 0
        };
      }

      for (const test of spec.tests) {
        folders[folder].total++;
        overall.total++;

        // console.log(JSON.stringify(test, null, 2));

        // console.log('Test:', test.title);
        // console.log('Statuses:', statuses);

        // if (DEBUG) {
          const statuses = 
            test.results?.map(r => r.status) || [];
          const hasFailed = statuses.includes('failed');
          const hasPassed = statuses.includes('passed');
        //   console.log('Test:', test.title);
        //   console.log('Statuses:', statuses);
        //   console.log('Outcome:', test.outcome);
        // }
        // if (DEBUG) {
        //   console.log(
        //     JSON.stringify(test, null, 2)
        //   );
        //   process.exit(0);
        // }
        if (DEBUG) {
          console.log('Title:', test.title);
          console.log('Outcome:', test.outcome);
          console.log(
            'Results:',
            test.results?.map(r => r.status)
          );
        }

        if (hasFailed && hasPassed) {
          folders[folder].flaky++;
          overall.flaky++;
        } else if (hasFailed) {
          folders[folder].failed++;
          overall.failed++;
        } else if (hasPassed) {
          folders[folder].passed++;
          overall.passed++;
        } else {
          folders[folder].skipped++;
          overall.skipped++;
        }
        // if (test.outcome === 'flaky') {
        //   folders[folder].flaky++;
        //   overall.flaky++;
        // } else if (test.outcome === 'unexpected') {
        //   folders[folder].failed++;
        //   overall.failed++;
        // } else if (test.outcome === 'expected') {
        //   folders[folder].passed++;
        //   overall.passed++;
        // } else {
        //   folders[folder].skipped++;
        //   overall.skipped++;
        // }
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

output += '📊 Overall Results\n';
output += `🧪 Total: ${overall.total}\n`;
output += `✅ Passed: ${overall.passed}\n`;
output += `❌ Failed: ${overall.failed}\n`;
output += `⚠️ Flaky: ${overall.flaky}\n`;
output += `⏭️ Skipped: ${overall.skipped}\n\n`;
const executed = 
  overall.passed + overall.failed + overall.flaky;
const passRate =
  executed === 0
    ? 0
    : (((overall.passed + overall.flaky) / executed) * 100).toFixed(2);
output += `📈 Pass Rate: ${passRate}%\n\n`;

// for (const [folder, stats] of Object.entries(folders)) {
//   output += `📁 ${folder.padEnd(12)}\n`;
//   output += `🧪 Total: ${stats.total}\n`;
//   output += `✅ Passed: ${String(stats.passed).padEnd(3)}\n`;
//   output += `❌ Failed: ${String(stats.failed).padEnd(3)}\n`;
//   output += `⚠️ Flaky: ${String(stats.flaky).padEnd(3)}\n\n`;
// }
Object.entries(folders)
  .sort(([folderA, a], [folderB, b]) => {
    const aIssues = a.failed + a.flaky;
    const bIssues = b.failed + b.flaky;

    if (bIssues !== aIssues) {
      return bIssues - aIssues;
    }

    return folderA.localeCompare(folderB);
  })
  .forEach(([folder, stats]) => {
    output += `📁 ${folder}\n`;
    output += `🧪 Total: ${stats.total}\n`;
    output += `✅ Passed: ${stats.passed}\n`;
    output += `❌ Failed: ${stats.failed}\n`;
    output += `⚠️ Flaky: ${stats.flaky}\n`;
    output += `🚨 Issues: ${stats.failed + stats.flaky}\n`;
    output += `⏭️ Skipped: ${stats.skipped}\n\n`;
  });

console.log(output);

fs.writeFileSync('folder-summary.txt', output);