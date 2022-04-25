# The Daily Feed


## Table of Contents   

- [Abstract](#abstract)
- [Installation and Setup](#installation-and-setup)
- [Project Goals](#project-goals)
- [Project Specs](#project-specs)
- [Challenges](#challenges)
- [Future Iterations](#future-iterations)
- [api](#api)
- [Wireframes and projectboard](#wireframes-and-projectboard)
- [Tech Stack](#tech-stack)
- [Contributors](#contributors)

## Abstract

This project utilizes the NYT Top Stories API to generate up-to-date stories from a variety of different categories. A user can filter for a certain category and visit the NYT website to view the rest of the story if interested.

## Installation and Setup
To run this app locally:

fork this repository
run git clone `git clone git@github.com:oacortez/Daily-Feed.git` in your command line

Run `cd` `Daily-Feed` to navigate into the repository

Run `npm install`

Run `npm start`

Visit `http://localhost:3000/` in your browser to view the local app!

## Project Goals

- Render a list of articles
- Be able to render a single view for each article
- Articles in the list must link to the detailed article view
- Filter functionality
- Complete in 8 hours or less


## Project Specs

View project spec [Here](https://mod4.turing.edu/projects/take_home/)

**Main page view:**

As a user I am able to view all articles

![Main-page-view](https://media.giphy.com/media/0f3e04b5Ub1XkQqtge/giphy.gif)

**Filter by section:**

As a user I am able to filter articles by sections available

![Filter-by-section](https://media.giphy.com/media/3q14xy4OYSZWcFHl2z/giphy.gif)

**View detailed page**

As a user I should be able to click on `View article` and redirects me to that single article view

![view-detailed-page](https://media.giphy.com/media/snw4TWqiWlqWXn1eRC/giphy.gif)


If the user goes to an incorrect path it will display a error message

![error-handling](https://media.giphy.com/media/0Bc93ED0hc2NdZMSUv/giphy.gif)


## Challenges

- Able to fetch an API that I have never used before
- Be able to hide api keys to env file properly

## Future Iterations

- Add a login page so that the app can be used for users.
- Add a search engine

## api
https://developer.nytimes.com/apis

## Wireframes and projectboard
[Figma](https://www.figma.com/file/Nb7QEsfMd7tVPiYzcpqLyw/Daily?node-id=0%3A1)

[GitHub Project board](https://github.com/oacortez/Daily-Feed/projects/1)


## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

## Contributors

[Oscar Cortez](https://github.com/oacortez)
