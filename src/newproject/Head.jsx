import { useState, useEffect} from "react";
import searchIcons from './search.svg'
import './home.css'
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=cc64568e';


function Home () {
    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState('')
    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('Superman'); 
    }, []);
    
    return(
        <div className="app">
            <h1>NETMOVIES</h1>

            <div className="search">
              <input
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img
                    src= {searchIcons}
                    alt='search'
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                ?(
                 <div className="container">
                    {movies.map((movie)=>(
                     <MovieCard movie={movie}/>
                    ))}
                 </div>
                ) :(
                    <div className="empty">
                       <h2>No movies found</h2>
                    </div>
                )
            };
        </div>
    );
}

export default Home;