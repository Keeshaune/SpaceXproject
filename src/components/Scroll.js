import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', width: '50.5vw', height: '45rem', paddingRight: '5.5vw', paddingTop: '10px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;