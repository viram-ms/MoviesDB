import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import styled from 'styled-components';
class Movieslist extends Component {
  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=030235cb097286cba94c4576d622204b');
      const movies = await res.json();
      console.log(movies.results);
      this.setState({
        movies: movies.results
      });
    }
    catch (e) {
      console.log(e);
    }
  }

  render() {


    return (
      <MovieGrid>
        
            {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.overview} />)}

      </MovieGrid>

    );
  }
}


export default Movieslist;

const MovieGrid = styled.div`
display:grid;
padding:1rem;
grid-template-columns:repeat(5,1fr);
grid-row-gap:1rem;
`;


