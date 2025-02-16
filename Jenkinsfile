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
                sh 'mkdir -p allure-results'  // Ensure the directory exists
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
                    body: """Cypress test execution has completed.
                        <br><br>
                        <b>Status:</b> ${currentBuild.result} <br>
                        <b>View the report:</b> <a href="${BUILD_URL}/artifact/allure-report/index.html">Allure Report</a>
                    """,
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']],
                    to: 'tonybloha@outlook.com',
                    mimeType: 'text/html'
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