import "../styles/NavContainer.css";
import { Link, NavLink } from "react-router-dom";
export default function NavigationContainer() {
  return (
    <nav className="nav-container">
      <span>
        <NavLink to="/" className={({isActive})=> isActive ? 'active-nav-link' :'passive-nav-link' }>Home</NavLink>
      </span>
      <span>
        <NavLink to="/Blog" className={({isActive})=> isActive ? 'active-nav-link' :'passive-nav-link' }>Blog</NavLink>
      </span>
      <span>
        <NavLink to="/About" className={({isActive})=> isActive ? 'active-nav-link' :'passive-nav-link' }>About</NavLink>
      </span>
      <span>
        <NavLink to="/Contact" className={({isActive})=> isActive ? 'active-nav-link' :'passive-nav-link' }>Contact</NavLink>
      </span>
    </nav>
  );
}
