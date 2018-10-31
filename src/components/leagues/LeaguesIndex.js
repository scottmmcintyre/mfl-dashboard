import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadLeaguesRequest } from '../../store/actions/leaguesActions';
import LeaguesList from './LeaguesList';

class LeaguesIndex extends Component {
    render() {

        if(!this.props.leaguesLoaded && this.props.cookie) {
            this.props.loadLeaguesRequest(this.props.cookie)
            return (<div>"Loading teams..."</div>)
        } else {
            return (
                <div className="container">
                    <LeaguesList leagues={this.props.leagues}/>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cookie: state.auth.cookie,
        leagues: state.leagues,
        leaguesLoaded: state.leagues.leaguesLoaded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadLeaguesRequest: (cookie) => { dispatch(loadLeaguesRequest(cookie)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaguesIndex)
