import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Poster } from './Movie';
import { Title } from './Movieslist';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Movie from './Movie';
import Overdrive from 'react-overdrive';
import Slider from 'react-styled-carousel';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';


class Moviedetail extends Component {
  state = {
    loading:true,
    movie: {},
    answer: [],
    id:this.props.match.params.id,
  }

  async componentDidMount() {
    // setTimeout(() => this.setState({ loading: false }), 500);
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
 
    
  

  render() {
    // const { loading } = this.state;

    // if(loading) { // if your component doesn't have to wait for an async action, remove this block 
    //   return null; // render null when app is not ready
    // }
    return (
      <div>
         <MovieWrapper backdrop={`${BACKDROP_PATH}${this.state.movie.backdrop_path}`}>
          <MovieInfo>
            
            <Overdrive id={`${this.state.movie.id}`}>
              <Poster src={`${POSTER_PATH}${this.state.movie.poster_path}`} />
            </Overdrive>
              <Rating>{this.state.movie.vote_average}</Rating>
            <div>
              <h3><b>{this.state.movie.title}</b></h3>
              <h6>{this.state.movie.release_date}</h6>
              {/* {this.state.movie.genres.map(genre => <h6>viram</h6> ) } */}
              <WrapperButton>
                <Button> <span><i class="fas fa-caret-right"></i></span>Trailer</Button>
                <Button_2><span><i class="fas fa-plus"></i></span>WatchList</Button_2>
              </WrapperButton>
              <p>{this.state.movie.overview}</p>
              <Button_3><span><i class="fas fa-caret-right"></i></span>Play Now</Button_3>
            </div>
          </MovieInfo>
        </MovieWrapper>
        
       <SimilarTitle>Similar Tiles</SimilarTitle>
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

const Rating = styled.h6`
position:relative;
color:white;
left:-140px;
bottom:-125px;

`;

const WrapperButton=styled.div`
display:flex;
`;
const Button =styled.button`
padding:5px 10px;
margin: 15px 5px;
border-radius:10px;
color:white;
background:red;
>span{
  padding:0 5px;
}
>i{
  font-size:10px;
}

`;
const Button_3 = styled.button`
display:block;
padding:10px 20px;
font-size:18px;
margin: 15px 5px;
border-radius:10px;
color:white;
background:black;
>span{
  padding:0 5px;
}

`;
const Button_2 = styled.button`
padding:5px 10px;

margin: 15px 5px;
border-radius:10px;
color:white;
background:black;
>span{
  padding:0 5px;
}
`;

const Generes = styled.h6`
`;

const SimilarTitle=styled.h2`
color:black;
padding: 10px 20px;
display:flex;
justify-content:flex-start;
`;

const MovieWrapper = styled.div`
    position:relative;
    padding-top:65vh;
    background:url(${props => props.backdrop}) no-repeat;
    background-size:cover;
`;

const MovieInfo = styled.div`
background:white;
color:black;
text-align:left;

display:flex;
> div{
    margin-left:20px
}
img{
    position:relative;
    top:-5rem;
}
`;

