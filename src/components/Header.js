import React from 'react';

const Header = ({getFreshData}) => {
    return (
        <div style={headerContainerStyles}>
            <div style={logoContainerStyles}>
                <img alt='' src='./images/spacex-logo.png' style={imgContainerStyles}/>
                <h1 style={launchesContainerStyles}>Launches</h1>    
            </div>
            <button onClick={getFreshData} style={buttonContainerStyles}>
                Reload Data   
                <img alt='' src={'../images/refresh.png'}/>
            </button>
        </div>

    )
}

export default Header;

const headerContainerStyles = {
    display: 'flex' ,
    justifyContent: "space-between",
    margin: '6vh', 
    alignItems: "baseline"
}

const logoContainerStyles = {
    display: 'flex', 
    justifyContent: 'flex-start',
    alignItems: 'baseline', 
    width: '280px', 
    height: '30px', 
    marginLeft: '10vh' 
}

const imgContainerStyles = {
    height: '22px', 
    width: '178.75px',
    alignItems: 'flex-start'
}

const launchesContainerStyles = {
    padding: '0px', 
    fontFamily: 'BrandonGrotesque-Regular', 
    fontSize: '20px', 
    color: '#545454'
}

const buttonContainerStyles = {
    backgroundColor: '#215184', 
    color: 'white', 
    borderColor: '#215184',
    borderTopLeftRadius: '15px', 
    borderBottomLeftRadius: '15px', 
    paddingLeft:'15px',
    width: '10%', 
    height: '4.2%', 
    fontSize: '16px', 
    display: 'flex', 
    justifyContent:'space-between'
}