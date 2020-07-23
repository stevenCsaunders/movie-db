import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import logo from './logo.png'
import './App.css'
import MoviesList from './components/MoviesList'
import MovieDetail from './components/MovieDetail'

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Link to="/">
					<img
						src={logo}
						className="App-logo"
						alt="logo"
						height="100"
					/>
				</Link>
			</header>
			<Switch>
				<Route path="/" exact component={MoviesList} />
				<Route path="/:id" component={MovieDetail} />
			</Switch>
		</div>
	)
}

export default App

