# API

[Link to Github repo](https://github.com/axelsundin/API)

This is a simple project to demonstrate the usage of API's. My watchlist allows you to search for movies and TV-shows and add them to your watchlist.

The search function fetches information about movies and TV-shows from an external API called "The Open Movie Database" ([omdbapi.com](https://www.omdbapi.com/)) .

You then have the choice to add and remove movies and TV-shows to you own list. This is done by sending requests to the local server API (index.js). Each request has a method dictating what action you want the API to take. POST for adding, DELETE for removing, and GET for returning the users watchlist.

### How to use

1. Open the terminal and run the command "npm install"
2. Use the command "npm start" to launch the server
3. Go to http://localhost:3000/
