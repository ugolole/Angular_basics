# Angular basics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Containerising this application.
Using the command **`docker-compose up --build -d`** and image for the application will be created and the application will be hosted in docker as a constainer.

Ensure to follow this `` installation guid to have the network setup and running before you 
build this application in docker. The application is configured to run on very specific network 
which needs to be created building attempting to host this application on Docker.

The application can be accessed on the following address `http://localhost:4020/` for the alpha
server
