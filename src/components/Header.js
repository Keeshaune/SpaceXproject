import React from 'react';

const Header = ({getFreshData}) => {
    return (
        <div style={{display: 'flex' ,justifyContent: "space-between", margin: '6vh', alignItems: "baseline"}}>
            <div style={{display: 'flex', justifyContent: 'flex-start',alignItems: 'baseline', width: '280px', height: '30px', marginLeft: '10vh' }}>
                <img alt='' src='./images/spacex-logo.png'
                    style={{height: '22px', width: '178.75px' ,alignItems: 'flex-start'}}/>
                <h1 style={{padding: '0px', fontFamily: 'BrandonGrotesque-Regular', fontSize: '20px', color: '#545454'}}>Launches</h1>    
            </div>
            <button onClick={getFreshData} style={{backgroundColor: '#215184', color: 'white', borderColor: '#215184',
                                                    borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', paddingLeft:'15px',
                                                    width: '10%', height: '4.2%', fontSize: '16px', display: 'flex', justifyContent:'space-between'}}>
                Reload Data   
                <img alt='' src={'../images/refresh.png'}/>
            </button>
        </div>

    )
}

export default Header;