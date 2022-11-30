import { Component } from "react";
import "./NavBarStyles.scss";
import { MenuItems } from "./MenuItems";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div></div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
          <button>Sing Up</button>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
