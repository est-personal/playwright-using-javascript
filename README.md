# Playwright Using JavaScript

![Playwright](https://img.shields.io/badge/Playwright-Automation-green)
![JavaScript](https://img.shields.io/badge/JavaScript-Framework-yellow)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-blue)
![Jenkins](https://img.shields.io/badge/CD-Jenkins-red)

UI Test Automation Framework built using Playwright and JavaScript.

---

## Overview
This project demonstrates a scalable UI test automation framework built using Playwright and JavaScript. It follows the Page Object Model (POM) design pattern, supports cross-browser execution, integrates with GitHub Actions and Jenkins for CI/CD, and provides automated Slack notifications and detailed reporting.

---

## Table of Contents
- #overview
- #features
- #project-structure
- #prerequisites
- [Installation](#installations
- [CI/CD Workflow- #slack-notifications
- #test-result-classification
- #reports
- [Future Enhancements](#future

---

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

## Project Structure
```text
playwright-using-javascript/
├── .github/
│   └── workflows/
├── pages/
│   ├── LoginPage.js
│   └── HomePage.js
├── tests/
│   ├── forms/
│   ├── buttons/
│   ├── dropdowns/
│   └── inputFields/
├── testData/
├── utils/
├── test-results/
├── playwright-report/
├── playwright.config.js
├── Jenkinsfile
└── package.json
```

---

## Prerequisites
Check if the following are installed on your machine:
```bash
node -v
npm -v
git --version
```

---

## Installation
Clone the repository and install dependencies:
```bash
git clone <repository-url>
cd playwright-using-javascript
npm install
npx playwright install
```

---

## Running Tests
The following commands can be used to execute tests:

### Run All Tests:
```bash
npx playwright test
```
### Run in Specific Browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox 
npx playwright test --project=webkit
```
### Run a Specific Test:
```bash
npx playwright test tests/forms/sample.spec.js
```
### Run by Tag:
```bash
npx playwright test --grep "@smoke"
```
### Headed Run:
```bash
npx playwright test --headed
```
### Parallel Execution:
```bash
npx playwright test --workers=4
```

---

## CI/CD Workflow

### GitHub Actions
The GitHub Actions workflow automatically:
1. Checkout Repository
2. Setup Node.js
3. Cache Playwright Browsers
4. Install Dependencies
5. Install Playwright browsers
6. Record Start Time
7. Run Playwright tests
8. Verify Playwright JSON Report
9. Generate Folder Summary
10. Read Folder Summary
11. Calculate Duration
12. Upload Playwright Report
13. Send Slack Notifications for successful and failed runs

### Jenkins Pipeline
Jenkins automatically triggers a build once a Pull Request is merged (ensure ngrok is active).
The pipeline performs the following steps:
1. Cleans Workspace
2. Checkout Latest Source Code
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
13. Archive Artifacts
14. Send Slack Notifications for successful and failed runs

Pipeline Parameters:
- Browser
- Execution Mode
- Head Mode
- Test Suite
- Tag
- Retries
- Workers

---

## Slack Notifications
A Slack notification is sent after every workflow execution.

### GitHub Actions Included Information
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
- Job (Jenkins job name)
- Build #
- Pull Request Details (Commit, Message, author)
- Duration
- Build Link

### Sample Output

GITHUB ACTIONS
```text
✅ Playwright Tests Passed
📦 Repository: est-personal/playwright-using-javascript
📊 Overall Results 🧪 Total:336 ✅ Passed: 331 ❌ Failed: 0 ⚠️ Flaky: 5 ⏭️ Skipped:0 
📁 forms 🧪 Total:123 ✅ Passed: 119 ❌ Failed: 0 ⚠️ Flaky: 4 ⏭️ Skipped:0 
📁 dropdowns 🧪 Total:63 ✅ Passed: 63 ❌ Failed: 0 ⚠️ Flaky: 0 ⏭️ Skipped:0 
📁 buttons 🧪 Total:99 ✅ Passed: 99 ❌ Failed: 0 ⚠️ Flaky: 0 ⏭️ Skipped:0 
📁 inputFields 🧪 Total:51 ✅ Passed: 50 ❌ Failed: 0 ⚠️ Flaky: 1 ⏭️ Skipped:0 
🔀 PR: 172 📝 Title: Fix Jenkinsfile as build failed after merging of Parallel Execution Parameter 👤 Author: est-personal 🌿 Branch: item-AUTOMATION-122-140
⏱ Duration: 8m 19s
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

---

## Test Result Classification
| Status | Description |
|----------|-------------|
| 🧪 Total | Total test cases executed per test file |
| ✅ Passed | Test passed successfully |
| ❌ Failed | Test failed after all retry attempts |
| ⚠️ Flaky | Test failed initially but passed on retry |
| ⏭ Skipped | Tests not run |

---

## Reports

### HTML Report
> 📸 HTML Report screenshot will be added soon.
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

## Future Enhancements
- Allure Reporting
- Docker Integration
- Azure DevOps Pipeline
- Email Notifications
- Test Dashboard
- API Automation Coverage

---

## Author

**Esteen Valdez**
QA Automation Consultant

GitHub: https://github.com/est-personal

---