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
                        bat 'npm ci'
                    }
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }
        stage('Save Cypress Cache') {
           steps {
                script {
                    stash name: 'cypress-cache', includes: 'C:\\Users\\Jenkins\\AppData\\Local\\Cypress\\Cache/**'
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
