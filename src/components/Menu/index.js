import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to="/active">Actives</Link>
        </li>
        <li>
          <Link to="/inactive">Inactives</Link>
        </li>
        <li>
          <Link to="/situation">Situation</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
