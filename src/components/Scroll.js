import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', width: '600px', height: '100vh'}}>
			{props.children}
		</div>
	);
}

export default Scroll;