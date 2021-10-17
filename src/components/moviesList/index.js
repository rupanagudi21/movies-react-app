import React, { Component } from 'react'
import './styles.scss';

export default class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    id: 1,
                    name: 'Test Movie 1',
                    type: 'Action',
                    image: './images/avtar.jpg',
                    releaseDate: 1634441735197,
                },
                {
                    id: 2,
                    name: 'Test Movie 2',
                    type: 'Action',
                    image: './images/avtar.jpg',
                    releaseDate: 1634441835197,
                },
                {
                    id: 3,
                    name: 'Test Movie 3',
                    type: 'Action',
                    image: './images/avtar.jpg',
                    releaseDate: 1634441135197,
                },
                {
                    id: 4,
                    name: 'Test Movie 4',
                    type: 'Action',
                    image: './images/avtar.jpg',
                    releaseDate: 1634441935197,
                },
                {
                    id: 5,
                    name: 'Test Movie 5',
                    type: 'Action',
                    image: './images/avtar.jpg',
                    releaseDate: 1634441735197,
                },
                {
                    id: 6,
                    name: 'Test Movie 6',
                    type: 'Action',
                    image: './images/avtar.jpg',
                    releaseDate: 1634441835197,
                },
                {
                    id: 7,
                    name: 'Test Movie 7',
                    type: 'Action',
                    image: './images/avtar.jpg',
                    releaseDate: 1634441135197,
                },
                {
                    id: 8,
                    name: 'Test Movie 8',
                    type: 'Action',
                    image: './images/avtar.jpg',
                    releaseDate: 1634441935197,
                },

            ]
        }
    }





    render() {
        return (
            <>
                <h3>Top Rated Movies</h3>
                <div className="p-grid">
                    {
                        this.state.movies.map((movie) => {
                            return <div id={movie.id} className="p-col movie-item">
                                <img src={movie.image} />
                                <p>{movie.name}</p>
                            </div>
                        })
                    }


                </div>
                <h3>Upcoming movies</h3>
                <div className="p-grid">

                    {
                        this.state.movies.map((movie) => {
                            return <div id={movie.id} className="p-col movie-item">
                                <img src={movie.image} />
                                <p>{movie.name}</p>
                            </div>
                        })
                    }

                </div>
                <h3>Now Playing Movies</h3>
                <div className="p-grid">

                    {
                        this.state.movies.map((movie) => {
                            return <div id={movie.id} className="p-col movie-item">
                                <img src={movie.image} />
                                <p>{movie.name}</p>
                            </div>
                        })
                    }
                </div >

            </>
        )
    }
}
