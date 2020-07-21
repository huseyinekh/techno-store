import React from "react"
import Classes from "./Menu.module.css"

const menu=()=>{
    return(
        <div className={Classes.MenuItems}>
        <ul >
          <li>Home</li>
          <li>About</li>
          <li>WhishList</li>
          <li>New </li>
          <li>BestSeller </li>

        </ul>
      </div>
    )
}

export default menu