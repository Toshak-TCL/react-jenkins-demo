pipeline {

    agent any

    environment {
        APP_SERVER = "clouduser@100.94.70.237"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Toshak-TCL/react-jenkins-demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Copy Build To App Server') {
            steps {
                sh '''
                scp -r -o StrictHostKeyChecking=no \
                build/* $APP_SERVER:/tmp/react-build/
                '''
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                ssh -o StrictHostKeyChecking=no $APP_SERVER "
                    sudo rm -rf /var/www/html/* &&
                    sudo cp -r /tmp/react-build/* /var/www/html/
                "
                '''
            }
        }
    }
}