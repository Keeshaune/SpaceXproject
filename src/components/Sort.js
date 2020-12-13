import React from 'react';

const Sort = ({toggleSort, isDescending}) => {
    return (
        <button onClick={toggleSort} style={{backgroundColor: '#215184', color: 'white', borderColor: '#215184'}}>
            <div>
                {isDescending === true ? 'Sort Ascending' : 'Sort Descending'}
                <img alt='' src={'../images/sort.png'}/> 
            </div>
        </button>
    )
}

export default Sort;