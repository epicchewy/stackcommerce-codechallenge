# StackCommerce FrontEnd Challenge
This challenge involved building an app that consumed the Twitter API to display the time & content of the last 25 Tweets for any given Twitter handle. Demo the app - [here](https://stackcommerce-frontend.herokuapp.com).

##App Design
The app itself has a very simple design -- a responsive, one-page app with a header, search bar, and list of avaialable tweets. The user can search Twitter handle, and for every valid one, the app will display up to 25 of the latest tweets in a fashion similar to Twitter's live feed. It is written entirely JavaScript, Node backend and Angular front end. I chose to use Angular for the front end because it is dynamic and extremely efficient when handling very specific pieces of information such as a tweet.

##Local Environment Setup
To create your own local setup, follow these steps:
+ Clone the repo onto your computer
```
git clone https://github.com/epicchewy/stackcommerce-codechallenge.git
```
+ Open Terminal/CMD Prompt and navigate to the directory
```
cd path/to/app/
```
+ Because of the project's dependencies, you have to first install all the packages.
```
npm install
```
+ Start the node server
```
$ node server.js
Node app is running on port 5000
```
+ View the app at 127.0.0.1:5000

##Heroku Deployment
Before you can deploy a Node app onto Heroku, you have to make an account on Heroku, install the Heroku Toolbelt, install Nodejs, and 
have an existing Node app. If you pass those prerequisites, you can quickly deploy your app. 

If you have already declared your app dependencies, all we have to do is create a new Heroku app. This begins with creating a new Git project. After you have created a new repo, the new Heroku toolbelt allows you to directly link a git remote into your already existing repository. 

+ Create a new Heroku app
```
$ heroku create
```
+ Add the heroku remote to your project
```
$ heroku git:remote -a <herokuapp-name>
```
+ Create a Procfile. A Procfile follows the process model to help execute your app. For this project, you will need to create a Procfile that runs the single dyno Node app.
```
$ vim Procfile
  web: node server.js
```
+ Deploy your code!
```
$ git push heroku master
```
