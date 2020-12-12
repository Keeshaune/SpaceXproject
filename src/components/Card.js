import React from 'react';
import dateFormatter from '../utils/dateFormatter';


const Card = ({number, name, date, series}) => {
    return (
        <div className='bg-white dib br3 ma2 grow bw2 shadow-5'
            style={{
                width: '100%', 
                height: '3.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h1>{number}</h1>
                <h2>{name}</h2>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                <p>{dateFormatter(date)}</p>
                <h3>{series}</h3>
            </div>
        </div>
    );
}

export default Card;