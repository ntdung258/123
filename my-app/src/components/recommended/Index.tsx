import React, { useState, useEffect } from 'react';
import {Movie}  from '../common/Movie';

const Recommended: React.FC = () => {
  const [recommended, setRecommended] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?api_key=70c0bcc4ac92146de55f5e52f6e33afd'
        );
        const data = await response.json();
        setRecommended(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const displayedRecommended = recommended.slice(0, 8);

  return (
    <div className="new-release-movie mt-5">
      <div>
          <div className="row">
              <div className="col-6">
                  <span className="text-white title-h3">Recommended</span>&ensp;&ensp;&ensp;
                  <button className="btn-hd"><span>Movies</span></button>&ensp;&ensp;&ensp;
                  <button className="btn-nrm-clock text-white"><span>Series</span></button>&ensp;&ensp;&ensp;
                  <button className="btn-nrm-clock text-white"><span>Animation</span></button>
              </div>
              <div className="col-6">
                  <img className="float-end pt-2" src={'./image/mui_ten_phai_small.svg'} alt="" />
                  <h2 className="mr-5 float-end text-white title-h2">View all</h2>
              </div>
          </div>
      </div>
      <div className="row mt-3">
        {displayedRecommended.map((recommended) => (
          <div className="col-md-3">
              <div className="">
                  <img style={{ width:'100%', height: '344px' }} src={`https://image.tmdb.org/t/p/w220_and_h330_face${recommended.backdrop_path}`} alt='' />
              </div>
              <div className="float-start m-2 pt-1 nrm-name">
                  <span className="text-white">Robots</span>
              </div>
              <div className="float-end m-2">
                  <button style={{marginRight:'7px'}} className="mr-5 btn-hd"><span>CAM</span></button>
                  <button className="btn-nrm-clock">
                      <img className="mb-1" src={'./image/clock.svg'} alt='' />&ensp;
                      <span className="text-white">3:12:00</span>
                  </button>
              </div>
          </div>
        ))} 
      </div>
  </div>
  );
};

export default Recommended;
