@echo off
setlocal

echo ====================================
echo          PLAYWRIGHT RUNNER
echo ====================================
echo.

echo Select Browser:
echo [1] Chromium
echo [2] Firefox
echo [3] WebKit
set /p browserChoice=Enter choice:

if "%browserChoice%"=="1" set browser=chromium
if "%browserChoice%"=="2" set browser=firefox
if "%browserChoice%"=="3" set browser=webkit

echo.
set /p workers=Enter number of workers:

echo.
echo Execution Mode:
echo [1] Headless
echo [2] Headed
set /p mode=Enter choice:

if "%mode%"=="1" set runMode=
if "%mode%"=="2" set runMode=--headed

echo.
echo Run Type:
echo [1] Test Folder
echo [2] Test File
echo [3] Tag
set /p runType=Enter choice:

echo.
echo Report to Open:
echo [1] Playwright Report
echo [2] Allure Report
echo [3] Both
echo [4] None
set /p reportChoice=Enter choice:

echo.

if "%runType%"=="1" goto Folder
if "%runType%"=="2" goto File
if "%runType%"=="3" goto Tag

goto End

:Folder
set /p folder=Enter folder path (e.g. tests\datePicker):

echo Running:
echo npx playwright test "%folder%" --project=%browser% --workers=%workers% %runMode%

npx playwright test "%folder%" --project=%browser% --workers=%workers% %runMode%

set TEST_RESULT=%ERRORLEVEL%

call :OpenReports
goto End

:File
set /p file=Enter file path (e.g. tests\datePicker\datePicker.spec.js):

echo Running:
echo npx playwright test "%file%" --project=%browser% --workers=%workers% %runMode%

npx playwright test "%file%" --project=%browser% --workers=%workers% %runMode%

set TEST_RESULT=%ERRORLEVEL%

call :OpenReports
goto End

:Tag
set /p tag=Enter tag (e.g. @smoke):

echo Running:
echo npx playwright test --grep "%tag%" --project=%browser% --workers=%workers% %runMode%

npx playwright test "%folder%" --project=%browser% --workers=%workers% %runMode%

set TEST_RESULT=%ERRORLEVEL%

call :OpenReports
goto End

:OpenReports

echo.
echo ====================================
echo            REPORTS
echo ====================================

if "%reportChoice%"=="1" (
    if exist "playwright-report\index.html" (
        echo Opening Playwright Report...
        start "" "playwright-report\index.html"
    ) else (
        echo Playwright Report not found.
    )
)

if "%reportChoice%"=="2" (
    echo Generating Allure Report...

    call allure generate allure-results --clean -o allure-report

    if exist "allure-report\index.html" (
        echo Opening Allure Report...
        start "" "allure-report\index.html"
    ) else (
        echo Allure Report not found.
    )
)

if "%reportChoice%"=="3" (
    if exist "playwright-report\index.html" (
        echo Opening Playwright Report...
        start "" "playwright-report\index.html"
    ) else (
        echo Playwright Report not found.
    )

    echo Generating Allure Report...

    call allure generate allure-results --clean -o allure-report

    if exist "allure-report\index.html" (
        echo Opening Allure Report...
        start "" "allure-report\index.html"
    ) else (
        echo Allure Report not found.
    )
)

if "%reportChoice%"=="4" (
    echo No report selected.
)

goto :eof

@REM .\playwrightRunner.bat