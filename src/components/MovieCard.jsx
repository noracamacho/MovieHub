import React from 'react'
import { Link } from "react-router-dom";
import backupImage from '../assets/images/backup.jpg'


export const MovieCard = ({ movie}) => {

  const {id, original_title, overview, poster_path} = movie;
  // If the movie doesn't have an image we use the default backup image
  const movieImage = poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : backupImage;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-800 m-3">
          <Link to={`/movie/${id}`}>
               <img className="rounded-t-lg" src={movieImage} alt="Movie Image" />
           <div className="p-5">
                <div to={`/movie/${id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
                </div>
                <p className="overview mb-3 font-normal text-gray-700 dark:text-gray-300 max-h-[120px] overflow-hidden text-ellipsis">{overview}</p>
            </div>
           </Link>
      </div>

    // <Link to={`/movie/${id}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600 m-3">
    //   <img className="object-cover w-full rounded-t-lg h-150 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={movieImage} alt="Movie Image"/>
    //   <div className="flex flex-col justify-between p-2 leading-normal">
    //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
    //       <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 md:max-h-[191px] md:max-w-[356px] overflow-hidden text-ellipsis">{overview}</p>
    //   </div>
    // </Link>
  )
}
