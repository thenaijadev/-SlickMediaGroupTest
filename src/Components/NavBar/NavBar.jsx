import React from 'react';
import Classes from "./NavBar.module.css";


function NavBar() {
  return (
    <div className={Classes.nav}>
      <div className={Classes.logo_text_div}>
        <p className={Classes.logo_text}>MyTestApp</p>
      </div>
    </div>
  )
}

export default NavBar;
