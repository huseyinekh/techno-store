import React from 'react';
import Style from "../rounded/rounded.css"
import {AiOutlineHeart}from "react-icons/ai"
const primary=props=> {
    return (
        <div className={["rounded_button ", props.className]}>
            <AiOutlineHeart className={["rounded_button ", props.className]}/>
        </div>
    )
}

export default primary;
