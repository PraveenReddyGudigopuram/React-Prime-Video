// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  return (
    <div className="movie-slider">
      <Slider {...settings}>
        {moviesList.map(each => (
          <MovieItem movieDetails={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider
