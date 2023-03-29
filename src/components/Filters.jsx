import React from 'react';
// import { useState } from 'react';
import Sort from './Sort';

function Filters({categories, activeIndex}) {

    const [activeCat, setActiveCat] = React.useState(activeIndex);

    return (<div className="filter">
    <div className="filters">
        {
            categories.map((cat, i) => <span key={i} className={i == activeCat ? "active" : ""} onClick={() => setActiveCat(i)}>{cat.toUpperCase()}</span>)
        }
    </div>
      <Sort types={["по дате", "по цене", "по популярности", "по количеству мест"]} activeType={2} />
    </div>);
}

export default Filters;