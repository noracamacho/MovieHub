import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, MovieSearch, PageNotFound } from '../pages';

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
            {/* Now Playing */}
            <Route path="/" element={<MovieList apiPath='movie/now_playing' title="Home"/>} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/movies/popular" element={<MovieList apiPath='movie/popular' title="Polular"/>} />
            <Route path="/movies/top" element={<MovieList apiPath='movie/top_rated' title="Top"/>} />
            <Route path="/movies/upcoming" element={<MovieList apiPath='movie/upcoming' title="Upcoming"/>} />
            <Route path="/search" element={<MovieSearch apiPath='search/movie'/>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
 