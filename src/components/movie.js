import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'

const POSTER_PATH = `http://image.tmdb.org/t/p/w154`

const Movie = ({ movie }) => (
	<div>
		<Link to={`/${movie.id}`}>
        <Overdrive id={`${movie.id}`} duration={500} >
				<Poster
					src={`${POSTER_PATH}${movie.poster_path}`}
					alt={movie.title}
				/>
			</Overdrive>
		</Link>
	</div>
)

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
	}),
	overview: PropTypes.string,
}

Movie.defaultProps = {
	overview: 'Overview not available',
}

export default Movie

export const Poster = styled.img`
	box-shadow: 0 0 20px black;
`
