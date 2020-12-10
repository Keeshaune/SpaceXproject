import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', width: '50.5%'}}>
			{props.children}
		</div>
	);
}

export default Scroll;