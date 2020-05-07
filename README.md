# Quality Survey Time 
## A cool survey building web app. 

#### By Drake Wilcox, Dusty McCord, K. Wicz

## VIEW DEPLOYED SITE: 
https://quality-survey-time.firebaseapp.com/signin

## Components Hierarchy

![Diagram](src/img/mockupv01.jpg)

## Page Preview
![Diagram](src/img/pageView.png)

## User Stories


|Component|Story|
|:---:|:---|
|Create Survey|A user should be able to create, update and delete a survey. All surveys should be stored in the database.|
|Fill out survey|A user should be able to fill out and submit surveys. Survey results should be submitted to the database. (A survey result can be associated to a survey by mimicking a one-to-many relationship.)|
|New User|A user should be able to sign up, sign in, and sign out.|
|Dashboard|A user should have their own dashboard which lists the surveys they've created.|
|Dashboard data visualization|Bonus: A user should be able to see the combined data on a survey in their dashboard. For instance, if a survey provides a 1-5 rating, return an average rating for all surveys.|


## Installation/Setup

Clone the project by typing this command into your terminal.
```sh
git clone https://github.com/dustatron/quality-survey-time.git
```

Navigate to the new project folder by typing:
```sh
cd quality-survey-time
```

Install all required packages with this command:
```sh
npm install
```

In the project directory, you can run: 

 ```sh
 npm start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

 ```sh
 npm test
```
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

 ```sh
  npm build
 ```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

 ```sh
  npm eject
 ```
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Support and Contact Details
_Have a bug or an issue with this application? [Open a new issue](https://github.com/dustatron/quality-survey-time/issues) here on GitHub._

## Technologies Used
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* Components Diagram made with [Draw IO](https://draw.io/).
* Photo by Joanna Kosinska on Unsplash

## License
[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_Drake Wilcox, Dusty McCord, K. Wicz_**