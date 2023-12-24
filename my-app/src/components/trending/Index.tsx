import React, { useState, useEffect } from 'react';
import {Movie}  from '../common/Movie';

const Trending: React.FC = () => {
  const [trending, setTrending] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/movie/week?api_key=70c0bcc4ac92146de55f5e52f6e33afd'
        );
        const data = await response.json();
        setTrending(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const displayedTrending = trending.slice(0, 3);

  return (
    <div className="trending mt-5">
        <div>
            <div className="row">
                <div className="col-6">
                    <h3 className="title-h3">Trending</h3>
                </div>
                <div className="col-6">
                    <img className="float-end pt-2" src={'./image/mui_ten_phai_small.svg'} alt="" />
                    <h2 className="mr-5 float-end title-h2">View all</h2>
                </div>
            </div>
        </div>
        <div className="row mt-3">
        {displayedTrending.map((trending) => (
            <div className="col-md-4">
                <div className="trending-img">
                    <img style={{width:'100%', height:'283px'}} src={`https://image.tmdb.org/t/p/w300${trending.backdrop_path}`} alt='' />
                    <div className="trending-clock">
                        <img className="mb-1" src={'./image/clock.svg'} alt='' />&ensp;
                        <span className="text-white">3:12:00</span>
                    </div>
                    <div className="trending-star">
                        <img className="pb-1" src={'./image/star.svg'} alt='' />&ensp;
                        <span className="text-white">{trending.vote_count}</span>
                    </div>
                </div>
                
                <div className="float-start m-2">
                    <span className="trending-name text-white">Medellin</span>
                </div>
                <div className="float-end m-2">
                    <button style={{marginRight:'10px'}} className="mr-5"><span>Action</span></button>
                    <button><span>Comedy</span></button>
                </div>    
            </div>
         ))}    
        </div>
    </div>
  );
};

export default Trending;
