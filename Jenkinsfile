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
                sh 'allure generate allure-results --clean -o allure-report'
            }
        }

        stage('Archive Allure Report') {
            steps {
                archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
                publishHTML(target: [
                    reportDir: 'allure-report',
                    reportFiles: 'index.html',
                    reportName: 'Allure Test Report',
                    alwaysLinkToLastBuild: true
                ])
            }
        }

        stage('Email Test Results') {
            steps {
                emailext subject: "Cypress Test Results - Build ${BUILD_NUMBER}",
                    body: """Test execution finished.
                    <br> View the Allure report: <a href="${BUILD_URL}allure-report/">Allure Report</a>""",
                    attachLog: true,
                    to: 'qvotan@gmail.com'
            }
        }
    }

    post {
        always {
            cleanWs() // Clean workspace after every run
        }
    }
}