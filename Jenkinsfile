pipeline {

    agent any

    options {
        timeout(time: 30, unit: 'MINUTES')
    }

    triggers {
        //cron('H 22 * * *')
        cron('H 15 * * 1-5') // Run at 10 PM on weekdays (Monday to Friday) 
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Create Authentication State') {
            steps {
                withCredentials([
                    file(
                        credentialsId: 'amazon-playwright-authFile',
                        variable: 'AUTH_FILE'
                    )
                ]) {
                    bat '''
                        if not exist "playwright\\.auth" mkdir "playwright\\.auth"
                        copy /Y "%AUTH_FILE%" "playwright\\.auth\\amazon.json"
                    '''
                }
            }
        }
        stage('Verify Test Selection') {
            steps {
                bat '''
                    echo ===== ALL TEST FILES =====
                    dir /s /b tests\\*.spec.js

                    echo ===== PLAYWRIGHT TEST LIST =====
                    npx playwright test tests/amazon --config=playwright.config.js --list
                '''
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npx playwright test tests/amazon'
            }
        }
    }

    post {
        always {
            archiveArtifacts(
                artifacts: 'playwright-report/**',
                allowEmptyArchive: true
            )

            bat '''
                if exist "playwright\\.auth\\amazon.json" del /Q "playwright\\.auth\\amazon.json"
            '''
        }
    }
}