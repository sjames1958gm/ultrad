var React = require("react");

var Rankings = (props) => {
    return (
        <div>
            <table className="rankings"> 
                <tbody  className="center-text">
                    <tr className="header"><th>Team</th><th>Total Points</th></tr>
                    { props.rankings.map((team) =>
                        (<tr key={team.team}><td>{team.team}</td><td>{team.points}</td></tr>)
                    )}
                </tbody>
            </table>
        </div>
    );
};

module.exports = Rankings;

