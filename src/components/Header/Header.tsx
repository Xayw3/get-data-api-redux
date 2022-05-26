import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => (
  <header className="header">
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')}
            to="/calculator"
          >
            Calculator
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
