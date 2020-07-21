import React from 'react'
import PropTypes from 'prop-types'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'

const Movie = ({ movie }) => (
		<div>
			<img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
            <p>{movie.overview}</p>
		</div>
	);


Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }),
    overview: PropTypes.string
}

Movie.defaultProps = {
    overview: 'Overview not available'
}

export default Movie
