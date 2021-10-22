import classes from "./header.module.scss";
import { useState } from "react";

function Header() {
  const [userName, setUserName] = useState("Lucas");
  return (
    <header className={classes.mainHeader}>
      <div className={classes.wrapper}>
        <h2>Best Version</h2>
        <div className={classes.profile}>
          <span>Olá, {userName}</span>
          <span className={classes.avatar} style={{backgroundImage: 'url("https://i.pravatar.cc/30")'}}></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
