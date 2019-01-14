import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import Overdrive from 'react-overdrive';
import Slider from 'react-styled-carousel';



const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';


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
            <Link to={`${this.props.movie.id}`}>
                <Overdrive id={`${this.props.movie.id}`}>
                
                        <Poster src={`${BACKDROP_PATH}${this.props.movie.backdrop_path}`} />
                
                </Overdrive>
            </Link>
        );
    }
}

const Button = styled.button`

`;

export const Poster = styled.img`
box-shadow:0 0 35px black;
`;