pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/antonbloha/CypressPetProject.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'  // Runs Cypress tests
            }
        }

        stage('Publish Test Results') {
            steps {
                junit '**/results/*.xml'  // Adjust if needed for test reports
            }
        }
    }

    post {
        always {
            echo "Pipeline execution completed."
        }
    }
}
}