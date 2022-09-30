import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/tickets">
        View All Tickets
      </a>

      <a className="menu-item" href="/technicians">
        View All Technicians
      </a>

      <a className="menu-item" href="/clients">
        View All Clients
      </a>

    </Menu>
  );
};