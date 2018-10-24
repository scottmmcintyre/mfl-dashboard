import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


class Navbar extends Component {

  renderLinks(cookie) {
    if (cookie) {
      return (<SignedInLinks />)
    } else {
      return (<SignedOutLinks />)
    } 
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue darken-3">
            <Link to="Home" className="brand-logo">FFTools</Link>
              {this.renderLinks(this.props.cookie)}
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
  })(Navbar);
