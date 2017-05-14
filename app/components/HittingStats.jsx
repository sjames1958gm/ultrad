var React = require("react");
import * as redux from "react-redux";
import * as actions from "actions";

import ColumnStats from "ColumnStats";

export class HittingStats extends  React.Component {
    componentWillMount() {
        this.props.dispatch(actions.startAddHitting());
    }

    render() {
        let { hitting } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="columns small-offset-2 small-centered small-8">
                        <img className="banner-img" src="http://ultradmilb.zohosites.com/files/edited.png"/>
                    </div>
                </div>
                <div className="main-body">
                    <ColumnStats
                        columns="2"
                        title="Total Team Hitting"
                        heading1="Team" heading2="Total Points"
                        key1="team" key2="points" 
                        sortKey="points"
                        sortType = "numeric"
                        values={hitting}
                    />
                    <ColumnStats
                        columns="3"
                        title="Team Average"
                        heading1="Team" heading2="Average" heading3="Points"
                        key1="team" key2="tavg" key3="points_avg"
                        sortKey="points_avg"
                        sortType = "numeric"
                        values={hitting}
                    />
                    <ColumnStats
                        columns="3"
                        title="Team Slugging"
                        heading1="Team" heading2="Slugging" heading3="Points"
                        key1="team" key2="tslugging" key3="points_slg"
                        sortKey="points_slg"
                        sortType = "numeric"
                        values={hitting}
                    />
                    <ColumnStats
                        columns="3"
                        title="Team HRs"
                        heading1="Team" heading2="HRs" heading3="Points"
                        key1="team" key2="homeruns" key3="points_hr"
                        sortKey="points_hr"
                        sortType = "numeric"
                        values={hitting}
                    />
                    <ColumnStats
                        columns="3"
                        title="Team RBIs"
                        heading1="Team" heading2="RBIs" heading3="Points"
                        key1="team" key2="rbis" key3="points_rbi"
                        sortKey="points_rbi"
                        sortType = "numeric"
                        values={hitting}
                    />
                    <ColumnStats
                        columns="3"
                        title="Team Net Stolen Bases"
                        heading1="Team" heading2="NSB" heading3="Points"
                        key1="team" key2="nsb" key3="points_nsb"
                        sortKey="points_nsb"
                        sortType = "numeric"
                        values={hitting}
                    />
                    <ColumnStats
                        columns="6"
                        title="Team Summary"
                        heading1="Team" heading2="Average" heading3="Slugging" heading4="HRs" heading5="RBIs" heading6="NSB"
                        key1="team" key2="tavg" key3="tslugging" key4="homeruns" key5="rbis" key6="nsb"
                        sortKey="team"
                        values={hitting}
                    />
                </div>
            </div>
        );
    }
}

export default redux.connect(
    (state) => ({
        hitting: state.hitting
    })
)(HittingStats);

