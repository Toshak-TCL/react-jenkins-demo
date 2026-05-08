pipeline {

    agent any

    environment {
        APP_SERVER = "user@11.22.33.44"
        IMAGE_NAME = "demo-ui-image"
        CONTAINER_NAME = "demo-ui-container"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t $IMAGE_NAME:${BUILD_NUMBER} .
                '''
            }
        }

        stage('Save Docker Image') {
            steps {
                sh '''
                    docker save -o demo-ui-image.tar \
                    $IMAGE_NAME:${BUILD_NUMBER}
                '''
            }
        }

        stage('Copy Image To VM34') {
            steps {
                sh '''
                    scp -o StrictHostKeyChecking=no \
                    demo-ui-image.tar \
                    $APP_SERVER:/opt/docker_image
                '''
            }
        }

        stage('Deploy Container On VM34') {
            steps {
                sh '''
                    ssh -o StrictHostKeyChecking=no $APP_SERVER "

                        docker load -i /opt/docker_image/demo-ui-image.tar &&

                        docker stop $CONTAINER_NAME || true &&
                        docker rm $CONTAINER_NAME || true &&

                        docker run -d \
                        --name $CONTAINER_NAME \
                        -p 8081:80 \
                        $IMAGE_NAME:${BUILD_NUMBER}
                    "
                '''
            }
        }
    }
}