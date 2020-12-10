import React from 'react';

const Header = ({getFreshData}) => {
    return (
        <div style={{display: 'flex' ,justifyContent: "space-between"}}>
            <img src='./images/spacex-logo.png'
                style={{height: '10%', width: '5vw', padding: '10px' ,alignItems: 'flex-start'}}/>
            <button onClick={getFreshData}>
                CLick me
            </button>
        </div>

    )
}

export default Header