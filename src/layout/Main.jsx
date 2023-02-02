import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const APY_KEY = process.env.REACT_APP_APY_KEY;

class Main extends React.Component{

    constructor(){
        super();

        this.state = {
            movies:[],
            loading: true
        
        };

        this.searchMovies = this.searchMovies.bind(this);
    }

    componentDidMount(){
        fetch(`http://www.omdbapi.com/?apikey=${APY_KEY}&s=matrix`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}));

        console.log(this.state.movies);
    }

    searchMovies(str, type = 'all'){
        this.setState({loading: true});
        fetch(`http://www.omdbapi.com/?apikey=${APY_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}));
    }


    render(){
        const {movies, loading} = this.state;
        return(
            <main class='content container'>
                <Search searchMovies={this.searchMovies}/>
                {loading ? <Preloader /> :  <Movies movies={movies}/>} 
            </main>
        )
    }
}


export default Main;