import {useState } from 'react';

function Sort({types, activeType}) {

    // console.log("Sort");

    const [activeI, setActiveI] = useState(activeType);
    const [isOpen, setIsOpen] = useState(false);

    const onClickType = (i) => {
        setActiveI(i);
        setIsOpen(false);
    }

    return (<div className="sort">
    <span onClick={() => setIsOpen(true)}>
      {types[activeI].toUpperCase()} <i className="fa-solid fa-chevron-down"></i>
    </span>

    { isOpen &&
        <div className="select-sort">
            {
                types.map((t, i) => <div key={i} className={i == activeI ? "active" : ""} onClick={() => onClickType(i)}>{t.toUpperCase()}</div>)
            }
        </div>
    }
  </div>);
}

export default Sort;