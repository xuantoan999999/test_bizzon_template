
# Introduction

Bizzon CMS Application

## Requirements

- Nodejs 6.0 and above
- MongoDB
- Redis
- Elastic Search
- Nodemon: `npm install -g nodemon`

## Install

```bash
cd web          # Change directory to web 
npm install     # Install nodejs dependency
bower install   # Install bower dependency

```
- Import/Export MongoDB Database

```bash
cd misc/seeds  # Change directory to misc/seeds
node import    # Run this command to import default cms data
node export    # Run this command to export your cms data and share to team members

```
- Default CMS Account


```bash

admin@gmail.com/iii3studi1

```

## How to run:

- Using Nodemon

```bash
npm start           # In the web folder
nodemon app         # In the web folder
gulp                # In the web folder - start application in watch mode
gulp images         # Optimize images
gulp lint           # Check js syntax
gulp jscs           # Check js coding style
gulp clean          # Clean build folder
gulp build          # Combine, minify css and js files, optimize images
gulp generator      # Comming soon
```

## List Connections:
- API Server: [http://localhost:9001/](http://localhost:9001/documentation)
- CMS: [http://localhost:9000/](http://localhost:9000/)
- Web:  [http://localhost:9006/](http://localhost:9006/) 