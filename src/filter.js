import React from 'react';

const Filter = ({onSelectChange}) => {
    return (
        <button>
            Filter by Year
            <select onChange={onSelectChange}>
                <option>{'2006'}</option>
                <option>{'2007'}</option>
                <option>{'2008'}</option>
                <option>{'2009'}</option>
                <option>{'2010'}</option>
                <option>{'2011'}</option>
                <option>{'2012'}</option>
                <option>{'2013'}</option>
                <option>{'2014'}</option>
                <option>{'2015'}</option>
                <option>{'2016'}</option>
                <option>{'2017'}</option>
                <option>{'2018'}</option>
                <option>{'2019'}</option>
                <option>{'2020'}</option>
            </select>
        </button>
    )
}

export default Filter;