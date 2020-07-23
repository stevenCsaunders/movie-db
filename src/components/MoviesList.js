import React, { Component } from 'react'
import styled from 'styled-components'
import Movie from './movie'

class MoviesList extends Component {
	state = {
		movies: [],
	}

	async componentDidMount() {
		try {
			const res = await fetch(
				'https://api.themoviedb.org/3/discover/movie?api_key=d648013626b6ded9d4b17af43e314812&language=en-US'
			)
			const movies = await res.json()
			this.setState({
				movies: movies.results,
			})
		} catch (e) {
			console.log(e)
		}
	}
	render() {
		return (
			<MovieGrid>
				{this.state.movies.map((movie) => (
					<Movie movie={movie} />
				))}
			</MovieGrid>
		)
	}
}

export default MoviesList

const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(5, 1fr);
	grid-row-gap: 1rem;
	margin: 10px 0;
	color: lightgray;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: bold;
`
