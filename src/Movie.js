import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Title } from './Movieslist';
import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import Overdrive from 'react-overdrive';
import Slider from 'react-styled-carousel';



const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

export default class Movie extends Component {

    state={
        loading:true
    }

     
    static propTypes = {
        movie: propTypes.shape({
            title: propTypes.string.isRequired,

        }),
        desc: propTypes.string
    }

    static defaultProps = {
        desc: 'Description not available'
    }
    async componentDidMount(){
    // setTimeout(() => this.setState({ loading: false }), 1500);

    }
    render() {
    //     const { loading } = this.state;

    // if(loading) { // if your component doesn't have to wait for an async action, remove this block 
    //   return null; // render null when app is not ready
    // }
        return (
            <div>
                 <MovieRating>
                 {this.props.movie.vote_average}
                     <Icon><i class="fas fa-star"></i></Icon>
                </MovieRating>
                 
            
            <Link to={`${this.props.movie.id}`}>
                <Overdrive id={`${this.props.movie.id}`}>
                
                        <Poster src={`${POSTER_PATH}${this.props.movie.poster_path}`} />
                      
                
                </Overdrive>
            
            </Link>
            <Rating>{this.props.movie.adult}</Rating>
            {/* <MovieName>{this.props.movie.title}</MovieName> */}
            {/* <MovieName>{this.props.movie.title.length < 15 ? `${this.props.movie.title}`:`${this.props.movie.title.substring(0,15)}...`}</MovieName> */}
            <MovieDate>{this.props.movie.release_date}</MovieDate>
           
            {/* <MovieName>{this.props.movie.title.length  }</MovieName> */}

            </div>
        );
    }
}

const Button = styled.button`

`;
const Rating=styled.h3`
    color:black;
`;

const Icon = styled.span`
color:red;
padding-left:3px

`;

const MovieRating = styled.h6`
right:-110px;
position:relative;
bottom:-30px;
z-index:2;
color:white;
`;


const MovieDate=styled.h6`
color:black;
display:flex;

`;

const MovieName = styled.h5`
color:black;
display:flex;
`;

export const Poster = styled.img`
position:relative;
box-shadow:0 0 35px black;
border:1px solid black;
border-radius:5%;
display:flex;
justify-content:center;
text-align:center


`;