import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', width: '50.5vw', height: '100vh', paddingRight: '5.5vw'}}>
			{props.children}
		</div>
	);
}

export default Scroll;