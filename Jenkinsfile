pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git 'git@github.com:antonbloha/CypressPetProject.git'
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
                archiveArtifacts 'allure-report/**'
            }
        }
        stage('Email Test Results') {
            steps {
                mail to: 'qvotan@gmail.com',
                     subject: 'Cypress Test Results',
                     body: 'Test execution completed. See attached Allure report.',
                     attachLog: true
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}