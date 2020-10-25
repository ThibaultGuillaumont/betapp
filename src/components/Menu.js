import React from "react";
import { push as Menu } from 'react-burger-menu'
import {
  Link
} from "react-router-dom";


export default function SideMenu() {
return(
  <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <Link id="home" className="menu-item" to="/">Acceuil</Link>
      <Link id="about" className="menu-item" to="/about">A propos</Link>

      <Link id="paris" className="menu-item" to="/paris">Paris</Link>
</Menu>)
}
