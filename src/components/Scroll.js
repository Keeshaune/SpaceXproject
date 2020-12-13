import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflow: 'scroll', width: '50.5vw', height: '45rem', paddingRight: '0.5vh', paddingTop: '10px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;