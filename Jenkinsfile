// pipeline {

//     agent any

//     environment {
//         APP_SERVER = "clouduser@100.94.70.237"
//     }

//     stages {

//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }

//         stage('Build React App') {
//             steps {
//                 sh 'npm run build'
//             }
//         }

//         stage('Copy Build To App Server') {
//             steps {
//                 sh '''
//                 scp -r -o StrictHostKeyChecking=no \
//                 build/* $APP_SERVER:/tmp/react-build/
//                 '''
//             }
//         }

//     stage('Deploy Application') {
//     steps {
//         sh '''
//         ssh -m hmac-sha2-512 $APP_SERVER "
//             rm -rf /var/www/html/* &&
//             cp -r /tmp/react-build/* /var/www/html/ &&
//             chmod -R 755 /var/www/html
//         "
//         '''
//     }
// }
//     }
// }

pipeline {

    agent any

    environment {
        APP_SERVER = "clouduser@100.94.70.237"
    }

    stages {

        stage('Build Docker React App') {
            steps {
                sh '''
                    ssh -m hmac-sha2-512 $APP_SERVER
                    docker build -t demo-ui-image .
                    docker run --name demo-ui-container -p 8080:80 -d demo-ui-image
                '''
            }
        }
    }
}