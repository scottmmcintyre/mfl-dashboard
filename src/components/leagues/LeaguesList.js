import React from 'react';
import LeagueSummary from './LeagueSummary';

const LeaguesList = (leagues) => {
  console.log("Leagueslist: leagues", leagues);
    return (
        <div className="project-list section">
          { leagues && leagues.leagues.allIds.map(league_id => {
            let league = leagues.leagues.byId[league_id];
            return (
              <LeagueSummary league={league} key={league.franchise_id}/>
            )
          })}
        </div>
      )
}

export default LeaguesList;