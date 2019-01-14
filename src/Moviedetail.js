import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Poster } from './Movie';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Movie from './Movie';
import Overdrive from 'react-overdrive';
import Slider from 'react-styled-carousel';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';


class Moviedetail extends Component {
  state = {
    movie: {},
    answer: [],
    id:this.props.match.params.id,
  }

  async componentDidMount() {
    try {

      const res1 = await fetch(`https://api.themoviedb.org/3/movie/${this.state.id}/similar?api_key=030235cb097286cba94c4576d622204b&page=1`)
      console.log(`${this.props.match.params.id}`);
      const answer = await res1.json();
      // console.log(this.props.match.params.id);
      console.log(answer.results);

      this.setState({
        answer: answer.results
      });
      console.log(this.state.answer[0].title);
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=030235cb097286cba94c4576d622204b`);
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie: movie
      });
    }
    catch (e) {
      console.log(e);
    }
  }

  async componentWillReceiveProps(nextProps){
    //call your api and update state with new props
    const { id } = nextProps.match.params;
    if(this.props.match.params.id !== id){
      console.log('hi');
          this.setState({
      id
    });
    console.log(id);
    // try{
    //   const res = await fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=030235cb097286cba94c4576d622204b`);
    //   const movie = await res.json();
    //   console.log(movie);
    //   this.setState({
    //     movie: movie
    //   });
    // }
    // catch(e) {
    //   console.log(e);
    // }
  }
  }
  async componentWillUpdate(nextProps) {
    if(this.props.match.params.id !== nextProps.match.params.id){
      console.log(nextProps.match.params.id);
    try{
      const res = await fetch(`https://api.themoviedb.org/3/movie/${nextProps.match.params.id}?api_key=030235cb097286cba94c4576d622204b`);
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie: movie
      });
      const res1 = await fetch(`https://api.themoviedb.org/3/movie/${this.state.id}/similar?api_key=030235cb097286cba94c4576d622204b&page=1`)
      console.log(`${this.props.match.params.id}`);
      const answer = await res1.json();
      // console.log(this.props.match.params.id);
      console.log(answer.results);

      this.setState({
        answer: answer.results
      });
    }
    catch(e) {
      console.log(e);
    }
    }
    
  }
  // async componentDidUpdate(nextProps){
  //   console.log('updated');
  // }
    
  

  render() {
    return (
      <div>
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
       
        <Slider cardsToShow={5} showDots={false} showArrows={true} hideArrowsOnNoSlides={false} responsive={[{breakPoint:1280, cardsToShow:7},
          {breakPoint:992,cardsToShow:5},
          {breakPoint:768,cardsToShow:4},
          {breakPoint:768,cardsToShow:4},
          {breakPoint:576,cardsToShow:2}
          ]}>
          {this.state.answer.map((movie,key) => {
            return (
            //   <div key={movie.id}> <h3 style={{color:'white'}}>{movie.title}</h3>
            // <Link  to={`${movie.id}`}>
            //   <Poster src={`${POSTER_PATH}${movie.poster_path}`} />
            //  </Link>
            //   </div>
            <Movie key = {movie.id} movie={movie} />
            )
          })}
        </Slider>

      </div>

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

