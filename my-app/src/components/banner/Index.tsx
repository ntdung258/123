import React, { useState, useEffect } from 'react';
import BannerItem from './BannerItem';
import {Movie}  from '../common/Movie';

const Banner: React.FC = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?api_key=70c0bcc4ac92146de55f5e52f6e33afd'
        );
        const data = await response.json();
        setMovieList(data.results);
        setCurrentMovie(data.results[0]);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = movieList.findIndex((movie) => movie === currentMovie);
      const nextIndex = (currentIndex + 1) % movieList.length;
      setCurrentMovie(movieList[nextIndex]);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentMovie, movieList]);

  return (
    <div>
      {currentMovie && <BannerItem {...currentMovie} />}
    </div>
  );
};

export default Banner;
