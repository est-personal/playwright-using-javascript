const fs = require('fs');
const path = require('path');
const DEBUG = process.env.DEBUG === 'true';

// const report = JSON.parse(
//   fs.readFileSync('test-results/results.json', 'utf8')
// );
const reportPath = 'test-results/results.json';

if (!fs.existsSync(reportPath)) {
  console.log(`Report not found: ${reportPath}`);

  fs.writeFileSync(
    'slack-metrics.json',
    JSON.stringify({
      total: 0,
      passed: 0,
      failed: 0,
      flaky: 0,
      skipped: 0,
      passRate: 0
    }, null, 2)
  );

  process.exit(0);
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

          const statuses = 
            test.results?.map(r => r.status) || [];
          const hasFailed = statuses.includes('failed');
          const hasPassed = statuses.includes('passed');

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
let problemModules = [];

const totalModules = Object.keys(folders).length;

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

    // Problem modules only
    if (stats.failed + stats.flaky > 0) {
      problemModules.push(
        `📁 ${folder}
    🚨 Issues: ${stats.failed + stats.flaky}
    ❌ Failed: ${stats.failed}
    ⚠️ Flaky: ${stats.flaky}`
      );
    }
  });

console.log(output);

const duration = process.env.DURATION || '';

const match =
  duration.match(/(\d+)m\s+(\d+)s/);

const durationSeconds =
  match
    ? Number(match[1]) * 60 + Number(match[2])
    : 0;

const summary = {
  date: new Date().toISOString().split('T')[0],
  total: overall.total,
  passed: overall.passed,
  failed: overall.failed,
  flaky: overall.flaky,
  skipped: overall.skipped,
  passRate: Number(passRate),
  duration,
  durationSeconds
};

console.log(summary);

fs.writeFileSync(
  'summary.json',
  JSON.stringify(summary, null, 2)
);

fs.writeFileSync(
  'folder-summary.txt', 
  output
);

fs.writeFileSync(
  'problem-modules.txt',
  problemModules.length
    ? problemModules.join('\n\n')
    : '✅ No Failed or Flaky Modules'
);

fs.writeFileSync(
  "coverage.txt",
  `📦 Modules Covered: ${totalModules}`
);

fs.writeFileSync(
  'slack-metrics.json',
  JSON.stringify({
    total: overall.total,
    passed: overall.passed,
    failed: overall.failed,
    flaky: overall.flaky,
    skipped: overall.skipped,
    passRate
  }, null, 2)
);