import React, { useState, useEffect } from 'react';
import {Movie}  from '../common/Movie';

const Recently: React.FC = () => {
  const [recently, setRecently] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming?api_key=70c0bcc4ac92146de55f5e52f6e33afd'
        );
        const data = await response.json();
        setRecently(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const displayedRecently = recently.slice(0, 4);

  return (
    <div className="recently">
      <h3>Recently Updated</h3>
      <div className="row p-3">
        {displayedRecently.map((recently) => (
          <div className="col-md-5ths" key={recently.id}>
            <img
              style={{ width: '64px', height: '103px' }}
              className="float-start"
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${recently.backdrop_path}`}
              alt=""
            />
            <div className="float-end text-white recently-text">
              <p>
                <b>{recently.title}</b>
              </p>
              <p>Series/S 2/EP 9</p>
              <p>{recently.release_date}</p>
            </div>
          </div>
        ))}
        <div className="col-md-5ths">
          <div className="ellipse float-end">
            <img src={'./image/mui_ten_phai.svg'} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recently;
