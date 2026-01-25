# 🎬 Movies Search App

A full-featured Movie Search Application built with React.js that integrates with the OMDB API.
Users can search for movies, filter by type, view detailed movie information, paginate results, and manage a list of favorite movies.

🚀 Live Features

🔍 Search movies by title or keyword

🎞️ Filter movies by type (Movie / Series / Episode) using OMDB API

📄 Pagination for large result sets

📌 View detailed movie information

❤️ Add & remove movies from Favorites

💾 Favorites persisted using Local Storage

🧭 Client-side routing using React Router

⚠️ Graceful error handling & empty state handling

🎨 Responsive UI styled with Tailwind CSS

# Tech Stack

React.js

React Router

JavaScript (ES6+)

Tailwind CSS

HTML

React Router Dom

React Icons

OMDB API

🔑 Environment Setup

1️⃣ Get OMDB API Key

Create an account at 👉 https://www.omdbapi.com/apikey.aspx

Copy your API key.

2️⃣ Create .env file

VITE_OMDB_API_KEY=your_api_key_here

📦 Installation & Run Locally

# Clone the repository
git clone https://github.com/your-username/movies-search-app.git

# Navigate to project folder
cd movies-search-app

# Install dependencies
npm install

# Start development server
npm run dev


App will run on:

👉 http://localhost:5173

# Routing Overview

Route	Description

/	Home page – Search & browse movies

/movie/:id -	Movie details page

/favorites -	Favorites page

# Core Functionalities

🔎 Search Movies

Uses OMDBs endpoint

Real-time search via input field

Displays results in a responsive grid

# Filter by Type

Dropdown filter using OMDB type parameter

Filters results via API (no array.filter() used)

# Pagination

Handles large datasets

Uses OMDB page parameter

Next & Previous navigation

📌 Movie Details

Fetches detailed data using OMDB i endpoint

Displays:

Poster

Title

Year

Genre

Director

Cast

Plot

Ratings

❤️ Favorites Management

Add/remove favorites from:

Home page

Movie details page

Stored in localStorage

Favorite count badge shown in navbar

⚠️ Error Handling

API errors handled gracefully

Displays user-friendly messages when:

No results found

Invalid API response

Loading state handled for movie details

🎨 UI & Styling

Built using Tailwind CSS

Fully responsive layout

Hover animations on movie cards

Blurred poster background on movie details page

Clean and modern UI inspired by streaming platforms

📌 Future Enhancements (Optional)

⭐ Ratings-based sorting

🎭 Genre-based filtering

🔐 Authentication

☁️ Cloud-based favorites storage

🎥 Trailer integration


👩‍💻 Author

Kanesha K

Software Engineer
