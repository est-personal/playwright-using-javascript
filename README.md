# Playwright Using JavaScript

<p align="center">
  <img src="https://img.shields.io/badge/Playwright_Framework-green">
  <img src="https://img.shields.io/badge/JavaScript-yellow">
  <img src="https://img.shields.io/badge/GitHub_Actions-blue">
  <img src="https://img.shields.io/badge/CD-Jenkins-red">
  <img src="https://img.shields.io/badge/Reporting-Allure-orange">
  <img src="https://img.shields.io/badge/Notifications-Slack-purple">
  <img src="https://img.shields.io/badge/Releases-Automated-success">
</p>

UI Test Automation built using Playwright Framework and JavaScript.

---

## Overview
This project demonstrates a scalable UI test automation built using Playwright Framework and JavaScript. It follows the Page Object Model (POM) design pattern, supports cross-browser execution, integrates with GitHub Actions and Jenkins for CI/CD, and provides automated Slack notifications and detailed reporting via Allure.

---

## Quick Links

- Repository: https://github.com/est-personal/playwright-using-javascript
- Dashboard: https://est-personal.github.io/
- Releases: https://github.com/est-personal/playwright-using-javascript/releases
- Actions: https://github.com/est-personal/playwright-using-javascript/actions

---

## Project Highlights

✅ Playwright with JavaScript

✅ Page Object Model (POM)

✅ Cross-Browser Testing

✅ GitHub Actions CI/CD

✅ Jenkins Integration

✅ Allure Reporting

✅ GitHub Pages Dashboard

✅ Slack Notifications

✅ Release Automation

✅ Release Drafter

✅ Historical Metrics Tracking

✅ Browser Health Monitoring

---

## Project Statistics

- ✅ 100+ Automated Test Cases
- ✅ Cross-Browser Testing
- ✅ GitHub Actions CI/CD
- ✅ Jenkins Integration
- ✅ Slack Notifications
- ✅ Automated Release Management
- ✅ Release Drafter
- ✅ GitHub Pages Dashboard
- ✅ Allure Reporting

---

## Table of Contents
- [Overview](#overview)
- [Quick Links](#quick-links)
- [Project Highlights](#project-highlights)
- [Project Statistics](#project-statistics)
- [Framework Architecture](#framework-architecture)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [CI/CD Workflow](#ci-cd-workflow)
- [Integrations](#integrations)
- [Test Result Classification](#test-result-classification)
- [Reports](#reports)
- [Dashboard](#dashboard)
- [Release Management](#release-management)
- [Browser Health](#browser-health)
- [Quality Metrics](#quality-metrics)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)

---

## Dashboard
Monitor automation health and execution trends through GitHub Pages.

🔗 Dashboard:
https://est-personal.github.io/

The dashboard provides:
- Browser Health KPI
- Browser Trend KPI
- Stability KPI
- Pass Rate Trend
- Duration Trend
- Release Metrics
- Historical Execution Data

---

## Framework Architecture
```text
Playwright Framework
│
├── Tests
├── Pages
├── Locators
├── Test Data
├── Fixtures
├── Helpers
│
├── Playwright
│
├── GitHub Actions
│   ├── PR Validation
│   ├── Scheduled Execution
│   ├── Release Automation
│
├── Jenkins
│
├── Slack Notifications
│
├── Allure Reports
│
└── GitHub Pages Dashboard
```

---

## Features
- Page Object Model (POM)
- Data-Driven Testing
- Cross-Browser Testing
  - Chromium
  - Firefox
  - WebKit
- Playwright Test Runner
- Playwright Reporter
- Allure Reporter
- GitHub Actions CI/CD
- Jenkins Pipeline Integration
- Slack Notification
- Gitlab Synchronization

---

## Project Structure
```text
playwright-using-javascript/
├── .github/
│   └── workflows/
├── config/
│   ├── QaPlaygroundUrls.js
├── fixtures/
│   ├── Pages.fixture.js
├── helpers/
│   ├── demo/
|   |   ├── UiPracticeTablesAssertions.js
│   ├── practice/
|   |   ├── AlertsAndDialogsActions.js
|   |   ├── AlertsAndDialogsAssertions.js
├── locators/
│   ├── demo/
|   |   ├── UiPracticeTablesLocators.js
│   ├── practice/
|   |   ├── AlertsAndDialogsLocators.js
|   |   ├── ButtonsLocators.js
├── metrics/
│   ├── browser-history.json
│   ├── duration-trend.png
│   ├── failure-trend.png
│   ├── history.json
│   ├── pass-rate.png
├── pages/
│   ├── demo/
|   |   ├── UiPracticeTablesPage.js
│   ├── practice/
|   |   ├── AlertsAndDialogsPage.js
|   |   ├── ButtonsPage.js
├── scripts/
│   ├── generate-chart.js
│   ├── problem-modules.txt
│   ├── save-browser-history.js
│   ├── save-history.js
│   ├── test-summary.js
├── testData/
│   ├── demo/
|   |   ├── UiPracticeTablesData.js
│   ├── practice/
|   |   ├── AlertsAndDialogsData.js
|   |   ├── ButtonsData.js
├── tests/
│   ├── demo/
│   |   ├── tables/
|   |   |   ├── delete.spec.js
|   |   |   ├── display.spec.js
│   ├── practice/
│   |   ├── alertsAndDialogs/
|   |   |   ├── alertsAndDialogs-validation.spec.js
|   |   |   ├── alertsAndDialogs.spec.js
│   |   ├── buttons/
|   |   |   ├── buttons-validation.spec.js
|   |   |   ├── buttons.spec.js
├── Jenkinsfile
├── package-lock.json
├── package.json
├── playwright.config.js
├── playwrightRunner.bat
├── README.md
```

---

## Prerequisites
Check if the following are installed on your machine:
```bash
git --version
node -v
npm -v
allure --version
```

---

## Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/est-personal/playwright-using-javascript.git
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

## Integrations

### GitHub Actions
CI/CD built in GitHub that lets automate tasks such as building, testing, and deploying code using YAML‑defined workflows triggered by repository events

### Slack
A Slack notification is sent after every workflow execution.

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

## Release Management

The framework supports automated release management:

### Release Drafter

Automatically generates:

- Features
- Fixes
- Integrations
- CI/CD Updates
- Refactoring
- Documentation Updates

### Features:

- Automated Release Drafting
- Categorized Release Notes
- Dependency Reporting
- Automated Slack Notifications
- Automated Validation Before Release

### Release Validation

Before publishing a release:

1. Playwright Tests Execute
2. Test Metrics Generated
3. Dependency Report Created
4. Release Assets Uploaded
5. Slack Release Notification Sent

### Release Assets

- release-summary.md
- dependency-versions.txt

---

## Browser Health

The framework automatically executes scheduled browser validation:

| Browser | Schedule |
|----------|----------|
| Chromium | Daily |
| Firefox | Weekly |
| WebKit | Weekly |

Collected KPIs:
- Browser Health
- Browser Stability
- Browser Trend
- Test Volume
- Failure Rate
- Top Problem Modules

Example KPIs:
- 🟢 Browser Health: 99.8/100
- 🌐 Browser Trend: 📈 +1.2%
- 📉 Failure Rate: 0.2%
- 📦 Test Volume: 485 Tests
- 🌐 Stability: Excellent

---

## Quality Metrics

The framework tracks:

- Pass Rate
- Failure Rate
- Flaky Tests
- Browser Trend
- Stability KPI
- Module Failures
- Historical Trends
- Execution Duration
- Test Volume

---

## Screenshots

### GitHub Pages Dashboard

add

### Allure Report

add

### Slack Notification

add

---

## Future Enhancements

- AI Test Generation
- AI Failure Analysis
- Self-Healing Locators
- Visual Regression Testing
- API Automation Coverage
- Docker Execution
- Azure DevOps Pipeline
- BrowserStack Integration
- Performance Testing
- Accessibility Testing
- Email Notifications

---

## Why This Project?

This repository demonstrates:

- Test Automation Framework Design
- CI/CD Pipeline Integration
- Release Management
- Test Analytics
- Reporting and Monitoring
- QA Engineering Best Practices
- Enterprise-Level Test Automation Architecture

---

## Skills Demonstrated

- Playwright
- JavaScript
- Page Object Model
- Test Automation
- GitHub Actions
- Jenkins
- Slack API Integration
- Allure Reporting
- Release Automation
- Test Analytics
- CI/CD Pipelines
- Quality Engineering

---

## License

MIT License

---

## Author

**Esteen Valdez**
QA Automation Consultant

GitHub: https://github.com/est-personal

---