import React from 'react';


const Card = ({number, name, date, series}) => {
    return (
        <div className='bg-white dib br3 ma2 grow bw2 shadow-5'
            style={{width: '100%', height: '5.5%'}}>
            <h1>{number}</h1>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{series}</p>
        </div>
    );
}

export default Card;