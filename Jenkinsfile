pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_BRANCH_NAME = env.BRANCH_NAME ?: "main"      
                    env.GIT_COMMIT_SHORT = bat(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()
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
                bat 'npx playwright test'
            }
        }
    }
    
    post {
        success {
            slackSend(
                color: 'good',
                message: """
                    ✅ Playwright Tests Passed

                    📦 Repository:
                    playwright-using-javascript
                    
                    🌿 Branch:
                    ${env.GIT_BRANCH_NAME}
                    🏗 Job: ${env.JOB_NAME}
                    🔢 Build: #${env.BUILD_NUMBER}
                    📝 Commit: ${env.GIT_COMMIT_SHORT}
                    ⏱ Duration: ${currentBuild.durationString}
                    🔗 Build URL:
                    ${env.BUILD_URL}
                """
            )
        }

        failure {
            slackSend(
                color: 'danger',
                message: """
                    ❌ Playwright Tests Failed

                    📦 Repository:
                    playwright-using-javascript

                    🌿 Branch:
                    ${env.GIT_BRANCH_NAME}
                    🏗 Job: ${env.JOB_NAME}
                    🔢 Build: #${env.BUILD_NUMBER}
                    📝 Commit: ${env.GIT_COMMIT_SHORT}
                    ⏱ Duration: ${currentBuild.durationString}
                    🔗 Build URL:
                    ${env.BUILD_URL}
                """
            )
        }
    }
}