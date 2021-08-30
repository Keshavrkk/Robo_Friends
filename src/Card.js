import React from 'react';

const Card = (props) =>{
	// var name=props.name;
	// var id=props.id;
	// var mail=props.mail;
	return(
		<div className="tc shadow-5 pointer ma2 bg-light-green brw br3 dib grow">
			<img alt="robots" 
			src={`https://robohash.org/${props.id}?100x100`} 
			/>
			
			<div className="black">
				<h3>{props.name}</h3>
				<p>Mail : {props.mail}</p>
				<p>Phone : {props.phone}</p>
			</div>
			</div>
		);
}

export default Card;
