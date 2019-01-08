import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Poster } from './Movie';
import styled from 'styled-components';
import Movie from './Movie';
import Overdrive from 'react-overdrive';
const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';


class Moviedetail extends Component {
    state = {
        movie: {}
      }
    
      async componentDidMount() {
        try {
          const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=030235cb097286cba94c4576d622204b`);
          const movie = await res.json();
          console.log(movie.results);
          this.setState({
            movie: movie
          });
        }
        catch (e) {
          console.log(e);
        }
      }

  render() {


    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${this.state.movie.backdrop_path}`}>
    <MovieInfo>
        <Overdrive id={`${this.state.movie.id}`}>

        <Poster src={`${POSTER_PATH}${this.state.movie.poster_path}`} />
        </Overdrive>
   
          <div>
          <h1>{this.state.movie.title}</h1>
          <h3>{this.state.movie.release_date}</h3>
          <p>{this.state.movie.overview}</p>
          </div>
        
    </MovieInfo>
                    


      </MovieWrapper>

    );
  }
}


export default Moviedetail;

const MovieWrapper = styled.div`
    position:relative;
    padding-top:50vh;
    background:url(${props => props.backdrop}) no-repeat;
    background-size:cover;
`;

const MovieInfo = styled.div`
background:white;
text-align:left;
padding:2rem 10%;
display:flex;
> div{
    margin-left:20px
}
img{
    position:relative;
    top:-5rem;
}
`;

