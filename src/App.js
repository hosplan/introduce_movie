import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () =>{
    const {data: {data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    
    //console.log(movies.data.data.movies);
    console.log({movies});
    //왼쪽꺼는 state의 movies 오른쪽은 axios의 movies
    //this.setState({movies:movies});
    this.setState({movies, isLoading: false});
  };

  componentDidMount(){
    this.getMovies();
  }

  render() {
    const { isLoading,movies } = this.state;
    return(
      isLoading ? 
      (<div className="loader">
          <span className="loader_text">Loading...</span>
      </div>) :
      (
        movies.map
        (movie => 
          <Movie key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres = {movie.genres}                       
          />
        )
      )           
    ) 
    
  }
}

export default App;
