import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import Backdrop from './Backdrop';
import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import Slider from 'react-styled-carousel';
const responsive = [
  { breakPoint: 1280, cardsToShow: 4, showDots: false }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 2 },

];

class Movieslist extends Component {

  state = {
    movies: [],
    trending: [],
    toprated:[],
    tvtoprated:[]
  }
  async componentDidMount() {
    try {
      
      const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=030235cb097286cba94c4576d622204b&language=en-US&page=1');
      const movies = await res.json();
      console.log(movies.results);
      this.setState({
        movies: movies.results
      });
      const res1 = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=030235cb097286cba94c4576d622204b');
      const trending = await res1.json();
      console.log(trending.results);
      this.setState({
        trending: trending.results
      });
      const res2 = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=030235cb097286cba94c4576d622204b&language=en-US&page=1');
      const toprated= await res2.json();
      console.log(toprated.results);
      this.setState({
        toprated:toprated.results
      });
      const res3 = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=030235cb097286cba94c4576d622204b&language=en-US&page=1');
      const tvtoprated= await res3.json();
      console.log(tvtoprated.results);
      this.setState({
        tvtoprated:tvtoprated.results
      });
    }
    catch (e) {
      console.log(e);
    }
  }

  static defaultProps={
     showArrows:true,
 showDots:false,
  }

  render() {
    return (
      <div>
        <Slider showArrows={true} showDots={false} autoSlide={100} hideArrowsOnNoSlides={false}>
          {this.state.movies.map(movie=> <Backdrop key={movie.id} movie={movie} />)}
        </Slider>
        <Title>Popular</Title>
        <Slider cardsToShow={5} showDots={false} showArrows={true} hideArrowsOnNoSlides={false} pauseOnMouseOver={true} padding="0px 40px">
          {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.overview} />)}
        </Slider>
        <Title>Trending</Title>
        <Slider cardsToShow={5} showDots={false} showArrows={true} hideArrowsOnNoSlides={false}>
          {this.state.trending.map(movie => <Movie key={movie.id} movie={movie} desc={movie.overview} />)}
        </Slider>
        <Title>Top Rated</Title>
        <Slider cardsToShow={5} showDots={false} showArrows={true} hideArrowsOnNoSlides={false}>
          {this.state.toprated.map(movie => <Movie key={movie.id} movie={movie} desc={movie.overview} />)}
        </Slider>
        <Title>Tv Top Rated</Title>
        <Slider cardsToShow={5} showDots={false} showArrows={true} hideArrowsOnNoSlides={false}>
          {this.state.tvtoprated.map(movie => <Movie key={movie.id} movie={movie} desc={movie.overview} />)}
        </Slider>
      </div>


    );
  }
}


export default Movieslist;

export const Title = styled.h4`
color:white;
`;

const DotsWrapper = styled.ul`
display:none;
`;

const MovieGrid = styled.div`
display:grid;
padding:1rem;
grid-template-columns:repeat(5,1fr);
grid-row-gap:1rem;
`;


