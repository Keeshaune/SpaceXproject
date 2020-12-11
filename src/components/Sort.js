import React from 'react';

const Sort = ({toggleSort, isDescending}) => {
    return (
        <button onClick={toggleSort}>
            <div>
                {isDescending === true ? 'Sort Ascending' : 'Sort Descending'}
            </div>
        </button>
    )
}

export default Sort;