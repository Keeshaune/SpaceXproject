import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', width: '50.5vw', height: '45rem', paddingRight: '0.5vh', paddingTop: '10px', overflow: 'hidden'}}>
			{props.children}
		</div>
	);
}

export default Scroll;