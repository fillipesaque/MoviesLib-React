import { useState , useEffect } from "react"
import MovieCard from "../Components/MovieCard";
import '../Pages/MovieGrid.css'

const movieUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

const [topMovies , setTopMovies] = useState([])

const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const date = await res.json()
    setTopMovies(date.results);
}

useEffect(() => {
    const topRatedUrl =  `${movieUrl}top_rated?${apiKey}`
    getTopRatedMovies(topRatedUrl)

} , [])

return (
    <div className="container">
        <h2 className="title">Mlehores Filmes:</h2>
        <div className="movies-container">
        {topMovies.length > 0 && topMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id}/>
        ))}
        </div>
    </div>
)
};

export default Home