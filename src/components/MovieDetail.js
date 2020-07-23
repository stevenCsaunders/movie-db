import React, { Component } from 'react'
import { Poster } from './movie'
import styled from 'styled-components'
const POSTER_PATH = `http://image.tmdb.org/t/p/w154`
const BACKDROP_PATH = `http://image.tmdb.org/t/p/w1280`

class MovieDetail extends Component {
	state = {
		movie: {},
	}

	async componentDidMount() {
		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=d648013626b6ded9d4b17af43e314812&language=en-US`
			)
			const movie = await res.json()
			this.setState({
				movie,
			})
		} catch (e) {
			console.log(e)
		}
	}
	render() {
		const { movie } = this.state
		return (
			<MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
				<MovieInfo>
						<Poster
							src={`${POSTER_PATH}${movie.poster_path}`}
							alt={movie.title}
						/>
					<div>
						<h1>{movie.title}</h1>
						<h3>{movie.release_date}</h3>
						<p>{movie.overview}</p>
					</div>
				</MovieInfo>
			</MovieWrapper>
		)
	}
}

export default MovieDetail

const MovieWrapper = styled.div`
	postion: relative;
	background: url(${(props) => props.backdrop}) no-repeat;
	padding-top: 50vh;
	background-size: cover;
`

const MovieInfo = styled.div`
	background: white;
	text-align: left;
	padding: 2rem 10%;
	display: flex;
	> div {
		margin-left: 2rem;
	}
	> img {
		position: relative;
		top: -5rem;
	}
`
