import React, { Component } from 'react'
import MoviesList from '../moviesList';
import Navbar from './../navbar';

export default class Home extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <MoviesList />

            </div>
        )
    }
}
