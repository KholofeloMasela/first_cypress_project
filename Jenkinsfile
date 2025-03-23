pipeline {
    agent any

    environment {
        CYPRESS_CACHE_FOLDER = "$HOME/.cache/Cypress"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/KholofeloMasela/first_cypress_project'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    def isNodeModulesPresent = fileExists 'node_modules'
                    if (!isNodeModulesPresent) {
                        sh 'npm ci'
                    }
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --headless'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'cypress/screenshots/**/*', allowEmptyArchive: true
                    archiveArtifacts artifacts: 'cypress/videos/**/*', allowEmptyArchive: true
                }
            }
        }

    }

    post {
        always {
            cleanWs()
        }
    }
}
