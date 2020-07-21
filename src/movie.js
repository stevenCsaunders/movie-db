import React from 'react'
import PropTypes from 'prop-types'

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }),
    description: PropTypes.string

}

Movie.defaultProps = {
    description: 'Description not available'
}

function Movie({ title, overview }) {


	return (
		<div>
			<h2>{title}</h2>
            <p>{overview}</p>
		</div>
	)
}

export default Movie
