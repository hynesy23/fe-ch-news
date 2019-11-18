# CH-News

This is a single page web application built with React.js. It is a news board website similar to Reddit. It displays a variety of articles which you can upvote/downvote on, as well add comments and your own articles. Users need to login to vote, and post comments/articles. They can also delete their comments. This project utilizes a RESTful API.

A live version of this project is hosted on Netlify and accessible via this link: https://ch-news.netlify.com, and the source code for the backend is available here: https://github.com/hynesy23/be-ch-news

## Getting Started

The instructions below will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this locally you will need Node.js and git installated on your system.

First check if you have node.js installed with below command:

```bash
node -v
```

If you do not have Node.js installed or command above does not work please follow the instructions on this guide: https://nodejs.org/en/download/package-manager/

Finally, check if git is installed on your machine enter the following command on your terminal:

```bash
git --version
```

If you do not have git installed on your machine please follow this guide.

### Installation/Running local version

Now that the prerequisites have been installed you can now install and run this application.

First you will need to clone this repo, to do so use the command line to navigate to your preferred directory on your local machine and enter the following command on the terminal:

```bash
git clone https://github.com/hynesy23/fe-ch-news
```

Navigate inside the folder and install all dependencies by entering the following commands on your terminal window:

```bash
cd ch-news

npm install
```

Finally to run the webapp enter the following command in your terminal window:

```
npm start
```

This will run the server on port 3000 and open the webpage in your browser or you can navigate to http://localhost:3000 in your browser manually.

### Using the site

On loading the web app you are not logged in as anyone, however you are free to browse the website, view articles, comments, and a list of users. In order to vote or post comments or articles, you need to either log in as an existing user, or create a new user. As well as posting articles and comments, you can also vote on them, as well as being able to delete comments that the current user posted.

You can login or create user by clicking the 'login' icon in the top righthand corner.

### Built with

- Runtime environment: Node.js
- React bootstrap: Create React App
- HTTP client: axios
- React Routing: reach/router
- Date Library: react-moment
- Loading Animations: sematic-ui-react
- Icons: Font Awesome

## Author

Cillian Hynes

## Contributing

This project is a portfolio piece and is not accepting contributions.

## Acknowledgments

This website was created as part of a final project at Northcoders Coding Bootcamp. A big thank you to everyone at Northcoders.

https://northcoders.com/
