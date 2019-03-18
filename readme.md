# How to

- git clone https://github.com/madbean/welcometrack.git

## Docker

- installer docker (lastest)
- cd docker
- executer la commande : "docker-compose up -d"

## Node Service

- cd data-loader
- installer les packages : " npm i"
- demarrer le service : "node ./src/index.js "

## Java Service
- cd csv.reader
- demarrer le service : "java -jar ./target/csv.reader-0.0.1-SNAPSHOT.jar"

## liens utils

- mongo ui : http://localhost:8081
    - after postman test check : http://localhost:8081/db/test/clients
    - do a "docker-compose up -d" if not started first time
- phpmyadmin : http://localhost:8006/phpmyadmin/index.php
    - login: root
    - password: lxit
- kafka ui : http://0.0.0.0:8000
- kibana : http://localhost:5601
    - uncheck : Index contains time-based events  
    - Index name or pattern: *

## TEST

### Executer les cmd:

- chmod +x ./post.sh 
- ./post.sh 

# Stop all docker conatainer

- docker stop $(docker ps -a -q) 
