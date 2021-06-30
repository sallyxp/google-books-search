# Google-Books-Search - a react components project using a MongoDB database
This respository creates a React-based Google Books search app.  React components are created and the book list is accessed via the Google Books API.  Books are searched for by title, and the user can save titles onto a MongoDB database.  The user then has an option to "View" the book, which will take them to the book on Google books or "Delete" a book, which will remove it from the Mongo database.

This project has been created using MongoDB, Express, React and Node.  MERN.
This is the link to the Heroku deployment:  

https://dry-sea-03304.herokuapp.com/

## *Table of Contents*
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#Credits) 
- [Contributing and Questions](#contributing)
- [Contact Me](#contact-me)

This system has the following landing page:
![alt text](/ReadmeImages/LandingPage.png) 

## *Installation*
To run this webpage, click on the Heroku link above.

To run this application, the user must clone all the files from this repository.  They also need to have 3 sessions running:
1 - type 'Mongod' on the command line
2 - type 'Mongo' on the second session, then 'Use Workout" to open the database
3. In the third session, type 'node server.js' on the cmd line.

 ## Usage

 There are 3 pages: Home, Saved and noMatch.

 
 The user is first presented with the landing page above.  If data has already been added, then the Workout status will also be shown on this page.

![alt text](/ReadmeImages/LandingPagewithData.png) 

Clicking on New Workout will display the following:

![alt text](/ReadmeImages/AddExercise.png) 

Completing all the fields and clicking on the 'Add Exercise' button. 

All data will be displayed on the Stats page - by clicking on 

'Dashboard' in the top left of the screen.

The Stats Page
![alt text](/ReadmeImages/Stats.png) 

 ## Credits
 1. BCS for their timely support and 
 2. Livvy Owen for pointing me in the right direction.
 3. Ben Ashley, my tutor, for his help and explanations regarding express Router.

## *Contributing and Questions*
For any suggestions or questions, please feel free to contact us via our Github pages shown below.

##Contact Me
Sally Rodgers https://github.com/sallyxp
LinkedIn: **[Sally Rodgers](www.linkedin.com/in/sallyhello1

This project is MIT licensed. ![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet) 
&copy;




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
