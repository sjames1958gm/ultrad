var React = require("react");
import * as redux from "react-redux";
import * as actions from "actions";

import ColumnStats from "ColumnStats";

export class PitchingStats extends  React.Component {
    componentWillMount() {
        this.props.dispatch(actions.startAddPitching());
    }

    render() {
        let {pitching} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="columns small-offset-2 small-centered small-8">
                        <img className="small-img banner-img" src="http://ultradmilb.zohosites.com/files/edited.png"/>
                    </div>
                </div>
                <div className="main-body">
                    <ColumnStats
                        columns="2"
                        title="Total Team Pitching"
                        heading1="Team" heading2="Total Points"
                        key1="team" key2="points" 
                        sortKey="points"
                        sortType = "numeric"
                        values={pitching}
                    />
                    <ColumnStats
                        columns="3"
                        title="Team ERA"
                        heading1="Team" heading2="ERA" heading3="Points"
                        key1="team" key2="team_era" key3="points_era"
                        sortKey="points_era"
                        sortType = "numeric"
                        values={pitching}
                    />
                    <ColumnStats
                        columns="3"
                        title="Team WHIP"
                        heading1="Team" heading2="WHIP" heading3="Points"
                        key1="team" key2="team_whip" key3="points_whip"
                        sortKey="points_whip"
                        sortType = "numeric"
                        values={pitching}
                    />
                    <ColumnStats
                        columns="3"
                        title="Team Ks9"
                        heading1="Team" heading2="Ks9" heading3="Points"
                        key1="team" key2="team_ks_per_9" key3="points_ks_per_9"
                        sortKey="points_ks_per_9"
                        sortType = "numeric"
                        values={pitching}
                    />
                    <ColumnStats
                        columns="3"
                        title="Team Wins"
                        heading1="Team" heading2="Wins" heading3="Points"
                        key1="team" key2="team_wins" key3="points_wins"
                        sortKey="points_wins"
                        sortType = "numeric"
                        values={pitching}
                    />
                    <ColumnStats
                        columns="3"
                        title="Team Holds/Saves"
                        heading1="Team" heading2="Hold/Saves" heading3="Points"
                        key1="team" key2="team_hold_save" key3="points_hold_save"
                        sortKey="points_hold_save"
                        sortType = "numeric"
                        values={pitching}
                    />
                    <ColumnStats
                        columns="6"
                        title="Team Summary"
                        heading1="Team" heading2="ERA" heading3="WHIP" heading4="Ks9" heading5="Wins" heading6="Hold/Saves"
                        key1="team" key2="team_era" key3="team_whip" key4="team_ks_per_9" key5="team_wins" key6="team_hold_save"
                        sortKey="team"
                        values={pitching}
                    />
                </div>
            </div>
        );
    }
}

export default redux.connect(
    (state) => ({
        pitching: state.pitching
    })
)(PitchingStats);

