function Movie(props) {
    const {Title, Year, imdbId, Type, Poster} = props;

    if(Type !== 'game'){
      return(
        <div className="card movie" id={imdbId}>
        <div className="card-image waves-effect waves-block waves-light">
          {Poster === 'N/A' ? <img className="no-image" src={`https://via.placeholder.com/350x450?text=${Title}`}/> : <img className="activator movie-img" src={Poster} />}
          
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{Title}</span>
          <p>
            <span>{Year}</span>
            <span className={Type}>{Type}</span>
          </p>
        </div>
        </div>
        )
    } else {
      return('')
    }
    
    
}

export default Movie;