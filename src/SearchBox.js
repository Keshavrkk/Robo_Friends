import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchField,searchChange}) =>{
	return(
			<div className="tc pa3 dark-green zone sticky">
			<input className="pa3 w-100 tc br3 bg-light-green" 
			type="text"
			placeholder="SearchBots"
			onChange={searchChange}
			/>
			</div>
		);
}

export default SearchBox;