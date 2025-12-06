import React, { useEffect } from 'react'
import heroImg from './assets/hero-img.png';
import Search from './components/Search';
import { useState } from 'react';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';
// import { updateCount } from './appwrite';
import { updateSearchTerm, getTopSearchedMovies } from './appwrite';


const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const apiOptions = {
  method: 'GET',
  headers : {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}




const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useDebounce(()=>setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  useEffect(()=>{
    async function fetchMovies(query) {
      let url = query?`${BASE_URL}/search/movie?query=${query}`: `${BASE_URL}/discover/movie?sort_by=popularity.desc`;
      setIsLoading(true);
      try{ 
        const response = await fetch(url, apiOptions);
        if(!response.ok)
          throw new Error('Error Fetching Movies');
        const data = await response.json();
        if(!data){
          setErrorMessage();
          return;
        }
        // console.log(data.results);
        setErrorMessage(null);
        setMovies([...data.results] || []);
        query && await updateSearchTerm(query, data.results[0]);
      }
      catch(e){
        // console.log(e);
        setErrorMessage('Error Fetching Movies! Try again later');
      }
      finally{
        setIsLoading(false);
      }
    }
    fetchMovies(debouncedSearchTerm);

  },[debouncedSearchTerm])

  useEffect(()=>{
    async function fetchTrendingMovies(){
      try{
        const resultTrendingMovies =  await getTopSearchedMovies();
        setTrendingMovies([...resultTrendingMovies]);
      }
      catch(e){
        console.error(e);
      }
      
    }

    fetchTrendingMovies();
  },[])

  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src={heroImg} alt="Hero Image" />
          <h1>Find <span className='text-gradient'>Movies</span>  You'll Enjoy Without the Hassle</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        {trendingMovies.length>0 && (
          <section className="trending">
            <h2>Trending Movies</h2>
            <ul>
              {trendingMovies.map((movie, index)=>{
                return <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.posterLink} alt="" />
                </li>
              })}
            </ul>
          </section>
        )}
        <section className="all-movies">
          <h2 className='mt-[40px]'>All Movies</h2>
          {isLoading?<Spinner/>:
            errorMessage? <p className='text-red-600'>{errorMessage}</p>:
              <ul>
                {movies.map((movie)=>{
                  return <MovieCard movie={movie} key={movie.id}/>
                })}
              </ul>
          }
        </section>
      </div>
    </main>
  )
}

export default App
