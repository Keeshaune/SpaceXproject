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
            launches.map(({flight_number, mission_name, launch_date_local, rocket: {rocket_name}}, i) => {
                return (
                    <Card 
                        key={i} 
                        id={launches[i]['launch_year']}
                        number={`#${launches[i]['flight_number']}`}
                        name={launches[i]['mission_name']} 
                        date={launches[i]['launch_date_local']} 
                        series={launches[i]['rocket']['rocket_name']}
                        />
                    );
                })     
            }
         </div>
    );
}

export default CardList;