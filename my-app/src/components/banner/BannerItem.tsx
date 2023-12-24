import React from 'react';
import {Movie}  from '../common/Movie';

const BannerItem: React.FC<Movie> = ({
    adult,
    backdrop_path,
    id,
    title,
    original_language,
    original_title,
    overview,
    poster_path,
    media_type,
    genre_ids,
    popularity,
    release_date,
    video,
    vote_average,
    vote_count
}) => {
  return (
    <>
    <div className="banner">
        <img className="img-bg" src={`https://image.tmdb.org/t/p/w780${backdrop_path}`} alt={title}/>
        <div className="row">
            <div className="col-md-6 banner-btn-left">
                <button className="btn-watch btn-now">
                    <span>Watch Now</span>&ensp;&ensp;
                    <img src={'/image/icon-watch-now.svg'} alt='' />
                </button>
            </div>
            <div className="col-md-6 banner-btn-right">
                <button className="btn-watch btn-later">
                    <span>Watch Later</span>&ensp;&ensp;
                    <img src={'/image/icon-watch-later.svg'} alt='' />
                </button>
            </div>
        </div>
        
        <div className="banner-text mt-4">
            <p>{title}</p>
            <div className="row">
                <div className="col-md-6">
                    {genre_ids.map((genre_id) => (
                        <button className="btn-action"><span>{genre_id}</span></button>
                    ))}
                </div>    
                    
                <div className="col-md-6 text-white mt-2">    
                    <img className="mb-1" src={'./image/calendar.svg'} alt='' />&ensp;
                    <span>2022</span>
                    &ensp;&ensp;&ensp;
                    <img src={'./image/clock.svg'} alt='' />&ensp;
                    <span>{release_date}</span>
                    &ensp;&ensp;&ensp;
                    <img className="pb-1" src={'./image/star.svg'} alt='' />&ensp;
                    <span>{vote_count}</span>
                </div>
                
                <div className="col-10 text-white pt-4 text-small">
                    <span>{overview}</span>
                </div>
            </div>
        </div>
        <img className="icon-bottom-banner" src={'./image/icon-bottom-banner.svg'} alt='' />
    </div>
    </>
  );
};

export default BannerItem;
