# Playwright Using JavaScript

UI Test Automation Framework built using Playwright and JavaScript.

## Features

- Playwright Test Runner
- Page Object Model (POM)
- Data-Driven Testing
- Cross-Browser Testing
  - Chromium
  - Firefox
  - WebKit
- HTML Reports
- JSON Reports
- JUnit XML Reports
- GitHub Actions CI/CD
- Jenkins Pipeline Integration
- Slack Notifications
- Test Result Summary by Test File

---
---

## CI/CD Workflow

### Github Actions
The GitHub Actions workflow automatically:
1. Checkout Repository
2. Setup Node.js
3. Cache Playwright Browsers
4. Installs dependencies
5. Installs Playwright browsers
6. Record Start Time
7. Run Playwright tests
8. Verify Playwright JSON Report
9. Generate Folder Summary
10. Read Folder Summary
11. Calculate Duration
12. Upload Playwright Report
13. Sends Slack notifications for successful and failed runs

---

### Jenkins Pipeline
The Jenkins automatically creates build once PR is merged (make sure ngrok is active)
It automatically builds:
1. cleans workspace
2. Checkout latest source code
3. Validate Parameters
4. Git Information
5. Environment Information
6. Verify Required Tools Installed
7. Install Dependencies
8. Install Playwright browsers
9. Run Playwright Tests
10. Get Test Summary
11. Verify Report
12. Verify Test Report
13. Archive Artifiacts
14. Sends Slack notifications for successful and failed runs

Pipeline Parameters:
- Browser
- Execution Mode
- Head Mode
- Test Suite
- Tag
- Retries
- Workers

---
---

## Slack Notifications

A Slack notification is sent after every workflow execution.

### Github Actions Included Information
- Run Status
- Repository Name
- Overall Result
  - Total Tests
  - Passed Tests
  - Failed Tests
  - Flaky Tests
  - Skipped Tests
- Playwright Test Summary (grouped by folder)
  - Total Tests
  - Passed Tests
  - Failed Tests
  - Flaky Tests
  - Skipped Tests
- Pull Request Details (PR #, PR Title, Author, Branch)
- Duration
- PR Link
- Workflow Link

---

### Jenkins Included Information
- Run Status
- Total Tests
- Passed Tests
- Failed Tests
- Flaky Tests
- Skipped Tests
- Playwright Report
- Browser
- Execution Mode
- Mode (Headless or Headed)
- Test Suite
- Tag
- Retries
- Workers
- Author
- Email
- Repository Name
- Branch
- Trigger (started by)
- Job (Jekins Job name)
- Build #
- Pull Request Details (Commit, Message, author)
- Duration
- Build Link

---

### Sample Output

GITHUB ACTIONS
```text
❌ Playwright Tests Passed
📦 Repository: est-personal/playwright-using-javascript
📊 Overall Results 🧪 Total:336 ✅ Passed: 331 ❌ Failed: 0 ⚠️ Flaky: 5 ⏭️ Skipped:0 
📁 forms 🧪 Total:123 ✅ Passed: 119 ❌ Failed: 0 ⚠️ Flaky: 4 ⏭️ Skipped:0 
📁 dropdowns 🧪 Total:63 ✅ Passed: 63 ❌ Failed: 0 ⚠️ Flaky: 0 ⏭️ Skipped:0 
📁 buttons 🧪 Total:99 ✅ Passed: 99 ❌ Failed: 0 ⚠️ Flaky: 0 ⏭️ Skipped:0 
📁 inputFields 🧪 Total:51 ✅ Passed: 5 ❌ Failed: 0 ⚠️ Flaky: 1 ⏭️ Skipped:0 
🔀 PR: 172 📝 Title: Fix Jenkinsfile as build failed after merging of Parallel Execution Parameter 👤 Author: est-personal 🌿 Branch: item-AUTOMATION-122-140
⏱ Duration: 8m 19s seconds
🔗 PR: https://github.com/est-personal/playwright-using-javascript/pull/172
🔍 Workflow: https://github.com/est-personal/playwright-using-javascript/actions/runs/31337602104
```

JENKINS
```text
🟡 PLAYWRIGHT TESTS COMPLETED WITH FAILURES
🧪 Total: 336
✅ Passed: 205
❌ Failed: 74
⚠️ Flaky: 57
⏭ Skipped: 0
📊 Playwright Report: http://localhost:8080/job/Test%20Automation%20Project%20-%20Playwright%20JavaScript/47/Playwright_Report/
🌐 Browser: all
⚙️ Execution Mode: parallel
🖥 Mode: headless
📁 Test Suite: dropdowns
🏷️ Tag: N/A
🔄 Retries: 1
👷 Workers: 2
👨 Author: est-personal
📧 Email: esteen.personalwork@gmail.com
📦 Repository: playwright-using-javascript
🌿 Branch: main
🚀 Trigger: Started by user Esteen Valdez
🏗 Job: Test Automation Project - Playwright JavaScript
🔢 Build: #47
📝 Commit: 08d3ddb
📄 Message: Merge pull request #173 from est-personal/item-AUTOMATION-122-140
🔀 PR: est
⏱ Duration: 1 hr 34 min and counting
🔗 Build URL: http://localhost:8080/job/Test%20Automation%20Project%20-%20Playwright%20JavaScript/47/
```

❌ Playwright Tests Failed
📦 Repository: playwright-using-javascript

📁 buttons
🧪 Total: 99
✅ Passed: 98
❌ Failed: 1
⚠️ Flaky: 0

📁 dropdowns
🧪 Total: 63
✅ Passed: 63
❌ Failed: 0
⚠️ Flaky: 0

📁 forms
🧪 Total: 104
✅ Passed: 102
❌ Failed: 0
⚠️ Flaky: 2

📁 inputFields
🧪 Total: 54
✅ Passed: 54
❌ Failed: 0
⚠️ Flaky: 0

🔀 PR #149
📝 Title: Add Playwright Test Summary Notification
👤 Author: est-personal
🌿 Branch: item-AUTOMATION-124-147

⏱ Duration: 505 seconds
```

---
---

## Test Result Classification

| Status | Description |
|----------|-------------|
| ✅ Passed | Test passed successfully |
| ❌ Failed | Test failed after all retry attempts |
| ⚠️ Flaky | Test failed initially but passed on retry |
| 🧪 Total | Total test cases executed per test file |

---

## Reports

### HTML Report

```bash
npx playwright show-report
```

### Generated Files

```text
playwright-report/
test-results/results.json
test-results/results.xml
folder-summary.txt
```

---

## Recent Enhancements

### Slack Notification Improvements

- Added per-file test execution summary
- Added test count per file
- Added flaky test reporting
- Added execution duration
- Added PR information in Slack alerts
- Added workflow URL in Slack alerts
- Improved Slack message formatting

### Qase Removal

Qase TestOps integration has been removed from the framework.

Removed items:

- Qase Playwright Reporter
- Qase API Token dependency
- Qase Project Code dependency
- Qase GitHub Actions configuration
- Qase Jenkins configuration

The framework now uses:

- Playwright Reports
- GitHub Actions
- Jenkins
- Slack Notifications

for test execution and reporting.