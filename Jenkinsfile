pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
        timeout(time: 120, unit: 'MINUTES')
        buildDiscarder(logRotator(
            numToKeepStr: '20',
            artifactNumToKeepStr: '10'
        ))
    }

    environment {
        QASE_API_TOKEN = credentials('QASE_API_TOKEN')
        QASE_PROJECT_CODE = 'TAP'
        REPOSITORY_NAME = 'playwright-using-javascript'
        QASE_PROJECT_URL = 'https://app.qase.io/project/TAP'
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.CHANGE_ID = env.CHANGE_ID ?: 'est'

                    env.GIT_BRANCH_NAME = env.BRANCH_NAME ?: "main"

                    env.GIT_COMMIT_SHORT = bat(
                        script: '@git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()

                    env.GIT_COMMIT_MESSAGE = bat(
                        script: '@git log -1 --pretty^=%%s',
                        returnStdout: true
                    ).trim()

                    env.BUILD_TRIGGER = currentBuild.getBuildCauses()[0].shortDescription

                    currentBuild.displayName = "#${BUILD_NUMBER} ${env.GIT_BRANCH_NAME}"
                    currentBuild.description = 
                        """
                            Branch: ${env.GIT_BRANCH_NAME}
                            Commit: ${env.GIT_COMMIT_SHORT}
                        """
                }
            }
        }

        stage('Verify Tools') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                catchError(
                        buildResult: 'UNSTABLE', 
                        stageResult: 'FAILURE'
                    ) {
                    bat 'npx playwright test'
                }
            }
        }

        // // Need to install Pipeline Utility Steps Plugin
        // stage('Get Test Summary') {
        //     steps {
        //         script {
        //             def results = readJSON file: 'test-results/results.json'

        //             int passed = 0
        //             int failed = 0
        //             int skipped = 0
        //             int flaky = 0

        //             results.suites.each { suite ->
        //                 suite.specs.each { spec ->
        //                     spec.tests.each { test ->
        //                         def status = test.results[-1]?.status

        //                         if (status == 'passed') {
        //                             passed++
        //                         } else if (status == 'failed') {
        //                             failed++
        //                         } else if (status == 'skipped') {
        //                             skipped++
        //                         } else if (status == 'flaky') {
        //                             flaky++
        //                         }
        //                     }
        //                 }
        //             }

        //             env.PASSED_TESTS = passed.toString()
        //             env.FAILED_TESTS = failed.toString()
        //             env.SKIPPED_TESTS = skipped.toString()
        //             env.FLAKY_TESTS = flaky.toString()
        //             env.TOTAL_TESTS = 
        //                  (passed + failed + skipped).toString()
        //         }
        //     }
        // }

        stage('Get Test Summary') {
            steps {
                script {
                    def xml = readFile('test-results/results.xml')

                    def totalMatcher = xml =~ /tests="(\d+)"/
                    def failedMatcher = xml =~ /failures="(\d+)"/
                    def skippedMatcher = xml =~ /skipped="(\d+)"/

                    env.TOTAL_TESTS = totalMatcher[0][1]
                    env.FAILED_TESTS = failedMatcher[0][1]
                    env.SKIPPED_TESTS = skippedMatcher[0][1]
                    env.FLAKY_TESTS = 'N/A'

                    env.PASSED_TESTS =
                        (
                            env.TOTAL_TESTS.toInteger()
                            - env.FAILED_TESTS.toInteger()
                            - env.SKIPPED_TESTS.toInteger()
                        ).toString()

                    echo "Total: ${env.TOTAL_TESTS}"
                    echo "Passed: ${env.PASSED_TESTS}"
                    echo "Failed: ${env.FAILED_TESTS}"
                    echo "Skipped: ${env.SKIPPED_TESTS}"
                }
            }
        }

        // stage('Debug JSON') {
        //     steps {
        //         script {
        //             def results = readJSON file: 'test-results/results.json'
        //             echo groovy.json.JsonOutput.prettyPrint(
        //                 groovy.json.JsonOutput.toJson(results)
        //             )
        //         }
        //     }
        // }

        stage('Debug JSON') {
            steps {
                script {
                    def results = readJSON file: 'test-results/results.json'
                    echo "Stats = ${results.stats}"
                }
            }
        }

        stage ('Verify Report') {
            steps {
                bat 'dir playwright-report'
            }
        }

        stage ('Verify Test Report') {
            steps {
                bat 'dir test-results /s'
                bat 'type test-results\\results.xml'
            }
        }

        stage('Verify Qase') {
            steps {
                bat 'echo QASE Project: %QASE_PROJECT_CODE%'
            }
        }

    }
    
    post {
        always {
            junit (
                allowEmptyResults: true,
                testResults: 'test-results/results.xml',
                // testResults: '**/results.xml'
                healthScaleFactor: 1.0
            )

            // script {
            //     def action = currentBuild.rawBuild.getAction(
            //         hudson.tasks.junit.TestResultAction
            //     )

            //     if (action) {
            //         env.TOTAL_TESTS = "${action.totalCount}"
            //         env.FAILED_TESTS = "${action.failCount}"
            //         env.PASSED_TESTS = "${action.totalCount - action.failCount}"
            //     }
            // }

            script {
                echo """
                    🌿 ${env.GIT_BRANCH_NAME}
                    📝 ${env.GIT_COMMIT_SHORT}
                """
            }

            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])

            archiveArtifacts(
                // artifacts: '''
                //     playwright-report/**,
                //     test-results/**,
                // '''.trim(),
                artifacts: 'playwright-report/**,test-results/**',
                allowEmptyArchive: true
            )

        }

        success {
            slackSend(
                color: 'good',
                message: """
                    🟢 PLAYWRIGHT TESTS PASSED
                    🧪 Total: ${env.TOTAL_TESTS}
                    ✅ Passed: ${env.PASSED_TESTS}
                    ❌ Failed: ${env.FAILED_TESTS}
                    ⚠️ Flaky: ${env.FLAKY_TESTS}
                    ⏭ Skipped: ${env.SKIPPED_TESTS}

                    📊 Playwright Report: ${env.BUILD_URL}Playwright_Report/

                    🧪 Qase: ${env.QASE_PROJECT_URL}
                    📦 Repository: ${env.REPOSITORY_NAME}
                    🌿 Branch: ${env.GIT_BRANCH_NAME}
                    🚀 Trigger: ${env.BUILD_TRIGGER}
                    🏗 Job: ${env.JOB_NAME}
                    🔢 Build: #${env.BUILD_NUMBER}
                    📝 Commit: ${env.GIT_COMMIT_SHORT}
                    📄 Message: ${env.GIT_COMMIT_MESSAGE}
                    🔀 PR: ${env.CHANGE_ID}

                    ⏱ Duration: ${currentBuild.durationString}

                    🔗 Build URL: ${env.BUILD_URL}
                """
            )
        }

        failure {
            slackSend(
                color: 'danger',
                message: """
                    🔴 PLAYWRIGHT TESTS FAILED
                    🧪 Total: ${env.TOTAL_TESTS}
                    ✅ Passed: ${env.PASSED_TESTS}
                    ❌ Failed: ${env.FAILED_TESTS}
                    ⚠️ Flaky: ${env.FLAKY_TESTS}
                    ⏭ Skipped: ${env.SKIPPED_TESTS}

                    📦 Repository: ${env.REPOSITORY_NAME}
                    🌿 Branch: ${env.GIT_BRANCH_NAME}
                    🚀 Trigger: ${env.BUILD_TRIGGER}
                    🏗 Job: ${env.JOB_NAME}
                    🔢 Build: #${env.BUILD_NUMBER}
                    📝 Commit: ${env.GIT_COMMIT_SHORT}
                    📄 Message: ${env.GIT_COMMIT_MESSAGE}
                    🔀 PR: ${env.CHANGE_ID}

                    ⏱ Duration: ${currentBuild.durationString}

                    🔗 Build URL: ${env.BUILD_URL}
                """
            )
        }

        unstable {
            slackSend(
                color: 'warning',
                message: """
                    🟡 PLAYWRIGHT TESTS COMPLETED WITH FAILURES
                    🧪 Total: ${env.TOTAL_TESTS}
                    ✅ Passed: ${env.PASSED_TESTS}
                    ❌ Failed: ${env.FAILED_TESTS}
                    ⚠️ Flaky: ${env.FLAKY_TESTS}
                    ⏭ Skipped: ${env.SKIPPED_TESTS}

                    📊 Playwright Report: ${env.BUILD_URL}Playwright_Report/

                    🧪 Qase: ${env.QASE_PROJECT_URL}
                    📦 Repository: ${env.REPOSITORY_NAME}
                    🌿 Branch: ${env.GIT_BRANCH_NAME}
                    🚀 Trigger: ${env.BUILD_TRIGGER}
                    🏗 Job: ${env.JOB_NAME}
                    🔢 Build: #${env.BUILD_NUMBER}
                    📝 Commit: ${env.GIT_COMMIT_SHORT}
                    📄 Message: ${env.GIT_COMMIT_MESSAGE}
                    🔀 PR: ${env.CHANGE_ID}

                    ⏱ Duration: ${currentBuild.durationString}

                    🔗 Build URL: ${env.BUILD_URL}
                """
            )
        }
    }
}