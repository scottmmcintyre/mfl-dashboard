import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/players">Players</Link></li>
        <li><Link to="/signin">Sign Out</Link></li>
    </ul>
  )
}

export default SignedInLinks
