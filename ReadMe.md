# Movie DB

## Getting Started

This project implementation makes use of **React 18** and **Typescript** with **Vite**

To successfully run this application please do the following
1. Create the file `env.local` in the root of the project
2. Add the following values and save the file
```
VITE_MOVIE_DB_API_KEY="d0f5f2e135336200362af8a1a73acb17"
VITE_MOVIE_DB_API_BASE_URI="https://api.themoviedb.org/3"
VITE_MOVIE_DB_API_POPULAR_MOVIES="/movie/popular"
VITE_MOVIE_POSTER_BASE_URI="https://image.tmdb.org/t/p/w500/"
```
3. Install dependencies `npm install`
4. Run the project `npm run dev`

# Possible Issues :trollface:

You may encounter issues with **CORS** restrictions. To get around this, you can disable CORS rules in the browser.

# Implementation Overview

This project is structured in the following way
1. *dataStore* (Redux) 
2. *utils* - contains utility classes including API 
3. *Types* - contains project-wide interface and type definitions
4. *Components* - contains components used throughout the project 
5. *Pages* - contains page components
