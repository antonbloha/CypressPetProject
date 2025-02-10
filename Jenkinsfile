pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    def branchName = env.CHANGE_BRANCH ?: env.BRANCH_NAME ?: 'main'
                    git url: 'git@github.com:antonbloha/CypressPetProject.git', branch: branchName
                }  
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'xvfb-run --auto-servernum --server-args="-screen 0 1280x1024x24" npx cypress run' 
            }
        }

        stage('Publish Test Results') {
            steps {
                junit '**/results/*.xml'  
            }
        }
    }

    post {
        always {
            echo "Pipeline execution completed."
        }
    }
}