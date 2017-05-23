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

