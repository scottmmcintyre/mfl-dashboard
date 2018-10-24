import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadPlayersRequest } from '../../store/actions/playersActions';
import { loadRosterRequest } from '../../store/actions/leaguesActions';
import ReactTable from 'react-table';

import "react-table/react-table.css";


class LeaguesDetail extends Component {

    createPlayerData(roster) {
        const data = [];

        roster.map( player_id => {
            let player = this.props.players.byId[player_id];
            data.push({
                position: player.position,
                name: player.name
            });
        })

        return data;
    }


    render() {
        const cookie = this.props.cookie;
        const league_id = this.props.match.params.league_id;
        const league = this.props.leagues.byId[league_id];

        if(!this.props.cookie) {
            this.props.history.push('/signin');
            return null;
        }
        else if(!this.props.playersLoaded && this.props.cookie) {
            this.props.loadPlayersRequest(cookie);
            return (<div>"Loading players..."</div>)
        } else if (!this.props.leagues.byId[league_id].roster) {
            this.props.loadRosterRequest(cookie, league_id, this.props.leagues.byId[league_id].franchise_id);
            return (<div>"Loading roster..."</div>)
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col s6">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">{league.name}</span>
                                        <p>League information goes here.</p>
                                        <p>Record: 7 - 5</p>
                                        <p>Season Points: 1256.5</p>
                                        <p>Power Ranking: 7/12</p>
                                    </div>
                                    <div className="card-action">
                                        <a href={league.url}>Go to MFL</a>
                                    </div>
                                </div>
                        </div>
                        <div className="col s6">
                            <ReactTable data={this.createPlayerData(league.roster)} columns={[
                                {
                                    Header: 'Position',
                                    accessor: 'position'
                                },
                                {
                                    Header: 'Name',
                                    accessor: 'name'
                                }
                            ]} 
                            defaultPageSize={50}
                            minRows={0} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cookie: state.auth.cookie,
        players: state.players,
        playersLoaded: state.players.playersLoaded,
        leagues: state.leagues
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPlayersRequest: (cookie) => { dispatch(loadPlayersRequest(cookie)) },
        loadRosterRequest: (cookie, league_id, franchise_id) => { dispatch(loadRosterRequest(cookie,league_id, franchise_id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaguesDetail)