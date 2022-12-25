// Write your code here
import {Component} from 'react'
import MovieSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMoviesList = moviesList.filter(
      movie => movie.categoryId === actionMovie,
    )
    const comedyMoviesList = moviesList.filter(
      movie => movie.categoryId === comedyMovie,
    )

    return (
      <>
        <div className="app-container">
          <div className="bg-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
              alt="prime video"
              className="prime-video-img"
            />
            <div className="action-movies">
              <h1 className="movies-heading">Action Movies</h1>
              <MovieSlider moviesList={actionMoviesList} />
              <h1 className="movies-heading">Comedy Movies</h1>
              <MovieSlider moviesList={comedyMoviesList} />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default PrimeVideo
