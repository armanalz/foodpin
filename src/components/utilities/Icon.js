import React from 'react';
import SVG from '../../resources/img/sprite.svg';


const Icon = (props) => {
    return (

        <svg id={`${props.id}`} className={`${props.name}`} style={{fill:`${props.fill}`}}>
		   <use xlinkHref={`${SVG}#${props.name}`} />
	    </svg>
    );
};

export default Icon;