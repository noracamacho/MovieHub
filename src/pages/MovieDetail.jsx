import { useState, useEffect } from "react";
import { useTabTitle } from "../hooks/useTabTitle";
import { useParams } from "react-router-dom";
import backupImage from '../assets/images/backup.jpg';

export const MovieDetail = () => {

  const params = useParams();
  const [movie, setMovie] = useState({});
  const movieImage = movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : backupImage;

  useEffect(() => {
     async function fetchMovie() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_APP_API_KEY}`);
      const json = await response.json();
      setMovie(json);
     }
     fetchMovie();
  }, [params.id]);

    // eslint-disable-next-line
  const tabTitle = useTabTitle(movie.title);

  return (
    <main>
      <section className="flex flex-row justify-around  flex-wrap pt-4 pb-2">
        <div className="max-w-sm">
            <img className="rounded" src={movieImage} alt={movie.title} />
        </div>
        <div className="pl-2 max-w-2xl text-gray-700 text-lg dark:text-white">
            <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movie.title}</h1>
            <p className="my-4">{movie.overview}</p>
            { movie.genres ? (
                  <p className="my-7 flex flex-wrap justify-evenly gap-2">
                      {
                        movie.genres?.map((genre) => (
                          <span key={genre.id} className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2">{genre.name}</span>
                        ))
                      }
                  </p>
              ) : ""
            }
            <div className="flex items-center">
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <p className="ml-2 font-bold text-gray-900 dark:text-white">{movie.vote_average}</p>
                <span className="text-gray-900 dark:text-white text-md">/10</span>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <span className="text-gray-900 dark:text-white text-sm">{movie.vote_count} Reviews</span>
            </div>
          
              <p className="my-3">
                <span className="mx-1 font-bold text-sm">Runtime:</span>
                <span>{movie.runtime} min.</span>
              </p>
              <p className="my-3">
                <span className="mx-1 font-bold text-sm">Release Date:</span>
                <span>{movie.release_date}</span>
              </p>
              <p className="py-4">
                <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer" className="ml-1 mt-4 bg-gray-900 border border-slate-600 rounded-lg px-3 pt-3 pb-4 text-center text-sm text-white hover:bg-gray-700 hover:cursor-pointer">
                  IMDB Link
                </a>
              </p>
            
        </div>
      </section>
    </main>
  )
}
