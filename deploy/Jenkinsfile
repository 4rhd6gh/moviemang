pipeline {
    agent none
    options { skipDefaultCheckout(true) }
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:11-alpine'
                }
            }
            options { skipDefaultCheckout(false) }
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Docker build') {
            agent any
            steps {
                sh 'docker build -t nginx-react-image:latest .'
            }
        }
        stage('Docker run') {
            agent any
            steps {
                sh 'docker ps -f name=nginx-react-container -q | xargs --no-run-if-empty docker container stop'
                sh 'docker container ls -a -fname=nginx-react-container -q | xargs -r docker container rm'
                sh 'docker rmi $(docker images -f "dangling=true" -q)'
                sh 'docker run -d --name nginx-react-container -p 80:80 nginx-react-image:latest'
            }
        }
    }
}