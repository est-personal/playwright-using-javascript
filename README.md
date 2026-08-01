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

The GitHub Actions workflow automatically:

1. Installs dependencies
2. Installs Playwright browsers
3. Executes Playwright tests
4. Generates reports
5. Creates a test summary by test file
6. Sends Slack notifications for successful and failed runs

---

## Jenkins Pipeline

The Jenkins automatically creates build once PR is merged (make sure ngrok is active)
It automatically builds:
1. cleans workspace
2. Checkout latest source code
3. Verify required tools installed
4. Install dependencies
5. Installs Playwright browsers
6. Executes Playwright tests
7. Get Test Summary
8. Verify Report generation
9. Archive Artifiacts
10. Sends Slack notifications for successful and failed runs 

---
---

## Slack Notifications

A Slack notification is sent after every workflow execution.

### Github Actions Included Information
- Repository Name
- Playwright Test Summary
    -  Total Tests
    - Passed Tests
    - Failed Tests
    - Flaky Tests
- Pull Request Details (PR #, PR Title, Author, Branch)
- Duration
- PR Link
- Workflow Link

---

### Jenkins Included Information
-  Total Tests
- Passed Tests
- Failed Tests
- Flaky Tests
- Skipped Tests
- Playwright Report
- Repository Name
- Trigger (started by)
- Job (Jekins Job name)
- Build #
- Pull Request Details (Commit, Message, author)
- Duration
- Build Link

---

### Sample Output

```text
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