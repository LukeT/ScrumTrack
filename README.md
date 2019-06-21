# Scrum Project Management
This project is issue-tracking software oriented around the SCRUM software development process. It was built as a BSc Computer sciene project at the University of Leicester (2018-2019)

This codebase is comprised of three core applications, each has information on installation and usage in the appropiate README.

- [Dissertation](/Dissertation.pdf)
- [Presentation](/Presentation.pdf)

# Running project
This project provides a docker-compose configuration, which defines all of the services, web interfaces and dependencies. You may also run each of the services in your local machine, each codebase provides deeper instructions on this.

## Docker Compose
Docker is a common tool used industry-wide. It provides easily reproducible environments that can be used in an array of circumstances. Docker may be installed on any operating system: https://www.docker.com/products/docker-desktop 

Once installed, open a command prompt in this directory and execute:
```sh
docker-compose up
```

This will pull down the base images, build all the code and start a webserver (this will take a couple of minutes). The UI will be available at http://localhost:8081 with username `admin` and password `admin`. Other users exist, `user`/`user` and `luke`/`user`

For access to the database, connect to `127.0.0.1:3308` with `root`/`root`, the database is `uni`.

To shutdown:
```sh
docker-compose down
```

## Local Machine:
We assume the following is installed on the host machine:
- NodeJS >= 10.x is installed: https://nodejs.org/en/
- go 1.11.x is installed and configured: https://golang.org/dl/. Your $GOPATH environment variable will want to include the base of this directory	
	e.g:
```sh
echo $GOPATH
/Users/Luke/Development/uni
```

See the relevent services for execution:
- ## [API Services](./src/app/README.md)
- ## [Web Interface](./src/ui/README.md)
- ## [Realtime Websockets](./src/realtime/README.md)


This project was build and tested against macOS, and builds under linux within docker-compose. This is untested in a Windows environment.
