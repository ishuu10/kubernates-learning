Docker

| Layer      | Meaning                     |
| ---------- | --------------------------- |
| Image      | Blueprint/template          |
| Container  | Running instance of image   |
| Dockerfile | Instructions to build image |
| Registry   | Image storage               |
| Volume     | Persistent data             |
| Network    | Container communication     |


before docker apps will have guest os  on vm
after docker - docker engine will host apps 

so what it solves: 
    it works on my machine is solved , docker packages your app into containers which contains all the dependencied ,runtime ,env etc . This containers is hosted on docker engine whoh is uniform platform(its linux)

standarixation of runtime


how it works

docker host -unifomr platfort

docker engine is where client -server Docker daemon, a Docker API that interacts with the daemon, and a command-line interface (CLI) that talks to the daemon.
docker engine ->ore part docker daemon , that handles the creation and management of containers.

docker run-   docker client 
when run is given ,it inetnally sends api to daemon  to start building 


Dockerfile: It is a file that describes the steps to create an image quickly.

Docker Image: read only template that is used for creating containers, containing the application code and dependencies this is class

docker contaimer-Runtime instance this is like object

docker volume - some times we need persistent data to be stored ,especially backend services ,then  docker volumen will phsycially store in docker directory 


| Instruction | Purpose                 |
| ----------- | ----------------------- |
| FROM        | Base image              |
| WORKDIR     | Set working dir         |
| COPY        | Copy files              |
| RUN         | Execute during build    |
| CMD         | Default runtime command |
| ENTRYPOINT  | Fixed executable        |
| ENV         | Environment variables   |
| EXPOSE      | Document ports          |



Docker Compose

Docker Compose is a tool used to define and run multi-container applications using a single YAML file.

Instead of running many docker run commands manually, you define everything in docker-compose.yml

how to remember dockerfile

when we to start first download the core so use FROM

then a place to sit - WORKDIR

install dependency - COPY ( copy from package)
RUN

cmd



