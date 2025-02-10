pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'git@github.com:antonbloha/CypressPetProject.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'xvfb-run --auto-servernum --server-args="-screen 0 1280x1024x24" npx cypress run --env allure=true'
            }
        }
        stage('Generate Allure Report') {
            steps {
                sh 'npx allure generate allure-results --clean -o allure-report'
            }
        }
        stage('Archive Allure Report') {
            steps {
                archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
            }
        }
        stage('Email Test Results') {
            steps {
                emailext(
                    subject: "Cypress Test Results: ${currentBuild.result}",
                    body: "Cypress test execution has completed.\n\nView the report at: ${BUILD_URL}/artifact/allure-report/index.html",
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']],
                    to: 'your-email@example.com'
                )
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}