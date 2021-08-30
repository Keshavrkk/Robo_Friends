import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
// import {robots} from './robots';

class App extends React.Component {
	constructor(){
		super()
		this.state={
			robots:[],
			searchField:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(users =>this.setState({robots:users}));
	}

	onSearchChange=(event)=>{
		this.setState({searchField:event.target.value})
		console.log(event.target.value);
	}
render(){
	const filteredRobots = this.state.robots.filter(robots =>{
			return(robots.name.toLowerCase()
			.includes(this.state.searchField.toLowerCase()));
		})
	if(this.state.robots.length === 0){
		return(<div>
			<h1 className="white tc underline grow-large">ROBO-FRIENDS</h1>
			<h2 className="tc pa3 white">LOADING</h2>
		</div>);
	}else if(filteredRobots.length===0){
		return (
		<div>
		<div>
		<h1 className="white tc underline grow-large">ROBO-FRIENDS</h1>
		<h2 className=" tc grow pa3 white">Oops!.No Such User Found!</h2>

		</div>
		<div className="bots">
		<SearchBox searchChange={this.onSearchChange} />
		</div>
		</div>
		);}
		else {
	 return(
		<div className="tc bgd">
		<div className="robo  w-100%">
		<h1 className="white underline grow-large">ROBO-FRIENDS</h1>
		<CardList robots={filteredRobots}/>
		</div>
		<div className="bots">
		<SearchBox searchChange={this.onSearchChange} />
		</div>
		</div>
		);
		}
	}
}

export default App;