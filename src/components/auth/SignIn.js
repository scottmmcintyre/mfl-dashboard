import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../store/actions/authActions';

class SignIn extends Component {
    state = {
        username: '',
        password: ''
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginRequest(this.state);
        this.props.history.push("/home");
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        });
      }
      render() {
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">Sign In</h5>
              <div className="input-field">
                <label htmlFor="username">MFL Username</label>
                <input type="text" id="username" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-1">Login</button>
              </div>
            </form>
          </div>
        )
      }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        //get the loginRequest action from the action creator and pass it to props
        loginRequest: (credentials) => {dispatch(loginRequest(credentials))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
