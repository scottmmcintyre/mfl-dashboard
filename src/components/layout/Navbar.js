import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/authActions';


class Navbar extends Component {

  onLogoutclick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {

    const { cookie } = this.props;

    const signedInLinks = (
      <div>
        <ul className="right">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/signin" onClick={this.onLogoutclick}>Sign Out</Link></li>
        </ul>
      </div>
    );

    const signedOutLinks = (
      <div>
        <ul className="right">
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </div>
    );

    return (
      <div>
        <nav>
          <div className="nav-wrapper blue darken-3">
            <Link to="/home" className="brand-logo">MFL Dashboard</Link>
              { cookie ? signedInLinks : signedOutLinks}
          </div>
        </nav>
      </div>
    )
  }
}

export default connect((state) => {
    return {
      cookie: state.auth.cookie
    }
  },
  ({ logoutUser }))(Navbar);
