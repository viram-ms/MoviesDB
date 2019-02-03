import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import Search from './Search';
import Backdrop from './Backdrop';
import styled from 'styled-components';
import Flickity from 'react-flickity-component';
// import Slider from 'react-styled-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";

const responsive = [
  { breakPoint: 1280, cardsToShow: 4, showDots: false }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 2 },

];

class Movieslist extends Component {

  state = {
    loading:true,
    movies: [],
    trending: [],
    toprated:[],
    tvtoprated:[],
    movieName:''
  }

  // async componentWillMount(){
  //   setTimeout(() => this.setState({ loading: false }), 1500);

  // }
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

   handleChange = (event) => {
    console.log(event.target.value);
    const name= event.target.value;
    
    
  }

  static defaultProps={
     showArrows:true,
 showDots:false,
  }

  render() {
    // const { loading } = this.state;

    // if(loading) { // if your component doesn't have to wait for an async action, remove this block 
    //   return null; // render null when app is not ready
    // }

    const settings = {
      
      className: "center",
      centerMode:'true',
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      arrows:true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
      // dots: true,
      // fade: true,
      // infinite:true,
      // speed: 500,
      // slidesToShow: 3,
      // slidesToScroll: 1,
      // centerMode:true,
      // className:"center"

    };
    const settings_2 = {
      
      className: "center",
      centerMode:'true',
      infinite: true,
      slidesToShow: 6,
      speed: 500,
      arrows:true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div >
       
        {/* <input type="text" placeholder="Enter Movie" onChange={this.handleChange} />
        <button type="submit">Submit</button> */}
       {/* {event.target.value !== null && <Search name={event.target.value}/>}  */}
        
        <Slider {...settings} >
          {this.state.movies.map(movie=> <Backdrop key={movie.id} movie={movie} />)}
        </Slider>
        <div className="container">
        <Title>Popular</Title>
        
        <Slider {...settings_2}>
          {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.overview} />)}
        </Slider>
        </div>
        
       <div className="container">
       <Title>Trending</Title>
        <Slider {...settings_2}>
          {this.state.trending.map(movie => <Movie key={movie.id} movie={movie} desc={movie.overview} />)}
        </Slider>
       </div>
       
       <div className="container">
       <Title>Top Rated</Title>
        <Slider {...settings_2}>
          {this.state.toprated.map(movie => <Movie key={movie.id} movie={movie} desc={movie.overview} />)}
        </Slider>
       </div>
       <div className="container">
       <Title>Tv Top Rated</Title>
        <Slider {...settings_2}>
          {this.state.tvtoprated.map(movie => <Movie key={movie.id} movie={movie} desc={movie.overview} />)}
        </Slider>
       </div>
       
      </div>


    );
  }
}


export default Movieslist;

export const Title = styled.h2`
margin-top:30px;
padding:0 15px;
color:black;
display:flex;
justify-content:flex-start;
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


