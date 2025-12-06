🎬 Movies Explorer
A simple and fast movie-discovery app built with React + Vite, using the TMDB API for fetching movies and Appwrite as the backend to track search activity and generate Trending Movies based on real user behavior.

📸 Screenshot

<img width="988" height="975" alt="image" src="https://github.com/user-attachments/assets/0f794a24-6eae-4de7-96b7-84235df3f01b" />


🚀 Features

🔍 Search movies instantly using TMDB

🔥 Trending Movies powered by Appwrite search analytics

🎞 Clean UI with popular & all-movies sections

💾 Appwrite Database stores search terms + counts

⚡ Fast Vite-based development & build

🛠 Tech Stack

Frontend: React (Vite)

Backend: Appwrite Cloud

API: TMDB

Deployment: GitHub Pages / AWS Amplify

🧱 Appwrite Table Structure (SearchTerms)
Field	Type	Description
searchTerm	string	User’s searched movie
count	int	Number of searches
posterLink	string	Movie poster URL
movie_id	string	TMDB movie ID
🔧 Setup
1. Install dependencies
npm install

2. Add environment variables

Create .env:

VITE_APPWRITE_PROJECT_ID=...
VITE_APPWRITE_DATABASE_ID=...
VITE_APPWRITE_TABLE_ID=...
VITE_TMDB_API_KEY=...

3. Run locally
npm run dev
