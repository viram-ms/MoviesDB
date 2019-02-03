import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import Overdrive from 'react-overdrive';
import Slider from 'react-styled-carousel';



const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w500';


export default class Backdrop extends Component {
    static propTypes = {
        movie: propTypes.shape({
            title: propTypes.string.isRequired,

        }),
        desc: propTypes.string
    }

    static defaultProps = {
        desc: 'Description not available'
    }
    render() {
        return (
            // <Link to={`${this.props.movie.id}`}>
            //     <Overdrive id={`${this.props.movie.id}`}>
                <Wrapper>
                    <Title>{this.props.movie.title}</Title>
                     <Poster src={`${BACKDROP_PATH}${this.props.movie.backdrop_path}`} />
                     <Icon><i class="far fa-play-circle"></i></Icon>
                </Wrapper>
                
                       
                
            //     </Overdrive>
            // </Link>
        );
    }
}

const Wrapper = styled.div`

`;
const Icon=styled.span` 
position:relative;
color:white;
color:white;
top:-80px;
right:-430px;
font-size:50px;
`;

const Title = styled.h3`
position:relative;
color:white;
top:50px;
margin-left:15px;
`;

export const Poster = styled.img`
box-shadow:0 0 35px black;
margin:0px;
`;