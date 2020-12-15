import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div>
      <ul>
        <li />
        <li />
        <li />
        <li>
          <Link to="/create">create</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
