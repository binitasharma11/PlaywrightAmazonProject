pipeline {

    agent any

    options {
        timeout(time: 30, unit: 'MINUTES')
    }

    triggers {
        cron('H 22 * * *')
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

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
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