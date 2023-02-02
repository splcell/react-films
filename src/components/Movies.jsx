import Movie from "./Movie";

function Movies(props) {
    const {movies = []} = props;

    return(
        <div className="movies">
            {movies.length ? movies.map(movie => {
                return(
                    <Movie key={movies.imdbId} {...movie}/>
                )
            }) : <h4>Ничего не найдено</h4>
        }
        </div>
    )
}

export default Movies;