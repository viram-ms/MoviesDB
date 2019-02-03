import React, { Component } from 'react';

class Search extends React.Component{

    async componentDidMount(){
         const res4 = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=030235cb097286cba94c4576d622204b&query=${this.props.name}`);
     const ans = await res4.json();
    console.log(ans.results);
    }
    render(){
        return(
            <div>hi</div>
        );
    }
}

export default Search;