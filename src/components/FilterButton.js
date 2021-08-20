import React from 'react';

const FilterButton = ({ button, filterCategory }) => {
    return (
        <div className="buttons">
            {
                button.map((btn, id) => {
                    return <button key={id} className="filterBtn" onClick={() => filterCategory(btn)}>{btn}</button>
                })
            }
        </div>
    )
}

export default FilterButton;
