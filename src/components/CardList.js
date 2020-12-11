import React from 'react';
import Card from './Card';

const CardList = ({launches}) => { 
    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            {
            launches.map(({ launch_year, flight_number, mission_name, launch_date_utc, rocket: {rocket_name}}, i) => {
                return (
                    <Card 
                        key={i} 
                        id={launch_year}
                        number={`#${flight_number}`}
                        name={mission_name}
                        date={launch_date_utc}
                        series={rocket_name}
                        />
                    );
                })     
            }
         </div>
    );
}

export default CardList;