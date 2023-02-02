import React from "react";

class Search extends React.Component{
    constructor(){
        super()

        this.state = {
            search: '',
            type: 'all'
        };

        this.handleKey = this.handleKey.bind(this);
        this.handleBtn = this.handleBtn.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleKey(e){
        if(e.key === 'Enter'){
            //e.preventDefault();
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleBtn(e){
        e.preventDefault();
        this.props.searchMovies(this.state.search, this.state.type);
    }

    handleFilter(e){
        this.setState(() => ({type: e.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        });
    }

    render(){
        return(
    <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="search" type="search" className="validate" placeholder="Search movie" value={this.state.search} onChange={(e) => this.setState({search: e.target.value})} onKeyDown={this.handleKey}/>
        </div>
      </div>
      <button className="waves-effect waves-light btn grey darken-4 search-btn" onClick={this.handleBtn}>Search</button>

      <div className="filter">
   <p>
    <label>
      <input className="with-gap" name="type" type="radio" data-type='all' onChange={this.handleFilter} checked={this.state.type === 'all'}/>
      <span>All</span>
    </label>
  </p>
  <p>
    <label>
      <input className="with-gap" name="type" type="radio" data-type='movie' onChange={this.handleFilter} checked={this.state.type === 'movie'}/>
      <span>Movies</span>
    </label>
  </p>
  <p>
    <label>
      <input className="with-gap" name="type" type="radio" data-type='series' onChange={this.handleFilter} checked={this.state.type === 'series'}/>
      <span>Series</span>
    </label>
  </p>
   </div>
    </form>
  </div>

        )
    }
}

export default Search;