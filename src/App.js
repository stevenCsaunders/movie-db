import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'
import Movie from './movie'
class App extends Component {
state = {
  movies: []
}

	async componentDidMount() {
		try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=d648013626b6ded9d4b17af43e314812&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      const movies = await res.json();
      this.setState({
        movies: movies.results
      })
    } catch(e) {
      console.log(e)
    }
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img
						src={logo}
						className="App-logo"
						alt="logo"
						height="100"
					/>
				</header>
				{this.state.movies.map((movie) => (
					<Movie
          movie={movie}
						key={movie.id}
						title={movie.title}
						overview={movie.overview}
					/>
				))}
			</div>
		)
	}
}

export default App
