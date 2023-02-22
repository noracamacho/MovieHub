import { useTabTitle } from "../hooks/useTabTitle";
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components/MovieCard";

export const MovieList = ({ apiPath, title }) => {

  // const { data: movies }= useFetch("https://api.themoviedb.org/3/movie/now_playing?api_key=fd1357778f9254c05693a6bd1fa0a042");
  const { data: movies }= useFetch(apiPath);

  useTabTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-evenly flex-wrap">
          { movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))
          }        
        </div>
      </section>
    </main>
  )
}
