import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';


const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

export default class Movie extends Component {

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
                    <Poster src={`${POSTER_PATH}${this.props.movie.poster_path}`} />
                    </Overdrive>
                    </Link>
                   
           

        );
    }
}

export const Poster = styled.img`
box-shadow:0 0 35px black;
`;