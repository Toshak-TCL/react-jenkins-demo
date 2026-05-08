pipeline {

    agent any

    environment {
        APP_SERVER = "clouduser@100.94.70.237"
    }

    stages {

        stage('Clone Code') {
            steps {
                checkout scm
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
        ssh -m hmac-sha2-512 $APP_SERVER "
            rm -rf /var/www/html/* &&
            cp -r /tmp/react-build/* /var/www/html/ &&
            chmod -R 755 /var/www/html
        "
        '''
    }
}
    }
}