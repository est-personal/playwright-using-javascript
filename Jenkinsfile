pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
        timeout(time: 30, unit: 'MINUTES')
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
                    env.CHANGE_ID = env.CHANGE_ID ?: 'N/A'

                    env.GIT_BRANCH_NAME = env.BRANCH_NAME ?: "main"

                    env.GIT_COMMIT_SHORT = bat(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()

                    env.GIT_COMMIT_MESSAGE = bat(
                        script: 'git log -1 --pretty^=%%s',
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

        stage('Verify Qase') {
            steps {
                bat 'echo QASE Project: %QASE_PROJECT_CODE%'
            }
        }

    }
    
    post {
        always {
            junit (
                testResults: 'test-results/results.xml', 
                allowEmptyResults: true
            )

            script {
                def testResult = currentBuild.rawBuild.getAction(
                    hudson.tasks.junit.TestResultAction
                )

                if (testResult) {
                    currentBuild.description =
                        "✅ ${testResult.totalCount - testResult.failCount} | " +
                        "❌ ${testResult.failCount} | " +
                        "🧪 ${testResult.totalCount}"
                }
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
                artifacts: '''
                    playwright-report/**,
                    test-results/**,
                '''.trim(),
                allowEmptyArchive: true
            )

        }

        success {
            slackSend(
                color: 'good',
                message: """
                    ✅ PLAYWRIGHT TESTS PASSED

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
                    ❌ PLAYWRIGHT TESTS FAILED

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
                    ⚠️ PLAYWRIGHT TESTS COMPLETED WITH FAILURES

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