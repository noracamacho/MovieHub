import { useTabTitle } from "../hooks/useTabTitle";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components/MovieCard";

export const MovieSearch = ({ apiPath }) => {

  const [ searchParams ] = useSearchParams();
  const queryParams = searchParams.get("q");
  const { data: movies }= useFetch(apiPath, queryParams);

  const tabTitle = useTabTitle( queryParams );

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 px-4 dark:text-white">{ movies.length === 0 ? `No results for '${queryParams}' please try another movie` : `Results for '${queryParams}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-around flex-wrap other:justify-evenly">
          { movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))
          }        
        </div>
      </section>
    </main>
  )
}
