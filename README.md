## Personal Blog 


This is a simple web application for a blog, implemented using Node.js, Express, and MongoDB. It allows users to create, view, and interact with blog posts. The application consists of two main files: db.js and app.js.

### Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the dependencies by running the following command: npm install
4. node app.js to launch the app on http://localhost:3000

### Usage

1. CLick on the `Journal` on the navigation panel to compose a blog
2. After publishing a sliced version of your post will appear on the home page.
3. Click on `Read More` next to the slcied article to view the whole post. 

### db.js

The db.js file contains the code for establishing a connection to the MongoDB database and defining the schema and model for the Article collection.

### Dependencies

mongoose: A MongoDB object modeling tool for Node.js.
mongodb: The official MongoDB driver for Node.js.

#### Installation 

1. git clone (https://github.com/MEC0134/Blog-EJS.git)
2. cd repository
3. npm install
4. node/nodemon app.js

### app.js

The app.js file contains the main logic and server configuration for the blog application.

### Dependencies

- express: A minimal and flexible web application framework for Node.js.
- body-parser: Middleware for parsing incoming request bodies.
- lodash: A utility library that provides helpful functions for working with arrays, objects, and functions.
- express-session: Middleware for managing sessions in Express.
- cookie-parser: Middleware for parsing cookies in Express.


### Features

- Database connection using Mongoose.
- Express routing for different pages: Home, About, Contact, Compose, and Single Post.
- View existing posts on the home page.
- Create new posts through the compose page.
- View individual posts on their respective pages.
- Session management using cookies and express-session.
- Templating with EJS for rendering dynamic content.


Feel free to customize and enhance this blog application according to your requirements.

