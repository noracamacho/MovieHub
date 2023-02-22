import { useState, useEffect } from "react"

export const useFetch = (apiPath, queryParams="") => {

    const [data, setData] = useState([]);
    const URL = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_APP_API_KEY}&query=${queryParams}`;

    useEffect(() => {
        // const URL = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;
        async function fetchMovies() {
          const response = await fetch(URL);
          const json = await response.json();
          setData(json.results);
          // console.log(apiPath);
        }
        fetchMovies();
      }, [URL]);


  return { data }
}
