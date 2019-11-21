import React from 'react';
import './css/Sorting.css';

const Sorting = ({sort}) => {
    return (
        <div className="sorting">
            <p>Sort by:</p>
            <ul>
                <li><button onClick={sort[0]}>Price</button></li>
                <li><button onClick={sort[1]}>Type</button></li>
            </ul>
        </div>
    );
}

export default Sorting;