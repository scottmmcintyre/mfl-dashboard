import React from 'react'
import { Link } from 'react-router-dom';

const LeagueSummary = (data) => {

    let league = data.league;
    return (
        <div className="card z-depth-1 league-summary">
            <div className="card-content grey-text text-darken-3">
                <Link to={"/league/" + league.league_id}>
                    <span className="card-title">{league.name}</span>
                </Link>
                <p>{league.franchise_name}</p>
                <p className="grey-text">{league.url}</p>
            </div>
        </div>
      )
}

export default LeagueSummary
