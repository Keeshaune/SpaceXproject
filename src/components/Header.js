import React from 'react';

const Header = ({getFreshData}) => {
    return (
        <div style={{display: 'flex' ,justifyContent: "space-between"}}>
            <div style={{display: 'flex', justifyContent: 'flex-start', width: '280px', height: '31px' }}>
                <img alt='' src='./images/spacex-logo.png'
                    style={{height: '22px', width: '178.75px', padding: '10px' ,alignItems: 'flex-start'}}/>
                <h1 style={{fontFamily: 'BrandonGrotesque-Regular', fontSize: '20px', color: '#545454'}}>Launches</h1>    
            </div>
            <button onClick={getFreshData}>
                Reload Data
            </button>
        </div>

    )
}

export default Header