import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="submenu-list">
        {this.props.menuItem.map((submenuItem, index) => (
          <li className="submenu-item" key={index}>
            <Link
              to={submenuItem.url}
              key={index}
              onClick={this.props.showNavbar}
            >
              {submenuItem.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

Dropdown.propTypes = {
  menuItem: PropTypes.array.isRequired,
  showNavbar: PropTypes.func.isRequired,
};
