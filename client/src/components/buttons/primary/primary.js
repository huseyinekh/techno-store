import React from 'react';
import Style from "./primary.css"
const primary=props=> {
    return (
        <button className={["primary_button ", props.className]}>
            {props.title}
        </button>
    )
}

export default primary;
