import React from 'react';
import Card from './Card';

const CardList = ({launches}) => { 
    return (
        <div>
            {
            launches.map((launch, i) => {
                return (
                    <Card 
                        key={i} 
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