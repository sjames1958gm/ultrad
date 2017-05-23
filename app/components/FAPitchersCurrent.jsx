var React = require("react");
import * as redux from "react-redux";
import * as actions from "actions";
import SortableTable from "SortableTable";

let format = [
        { key: "status", h: "Status" }, {key: "player", h: "NAME", url: "player_url"}, {key: "age", h: "Age"},
        { key: "team", h: "TEAM"}, { key: "wins", h: "W"}, { key: "losses", h: "L"}, {key: "era", h: "ERA"},
        { key: "games", h: "G"}, { key: "games_started", h: "GS"}, { key: "comp_games", h: "CG"}, 
        { key: "shut_outs", h: "SO"}, { key: "saves", h: "SV"}, { key: "inn_pitched", h: "IP"}, { key: "hits", h: "H"},
        { key: "runs", h: "R"}, { key: "earned_runs", h: "ER"}, { key: "homers", h: "H"}, { key: "walks", h: "BB"}, 
        { key: "strike_outs", h: "SO"}, { key: "w_h_per_inn", h: "WHIP"}, { key: "hold", h: "HLD"}
        ];

export class FAPitchersCurrent extends  React.Component {
    componentWillMount() {
        this.props.dispatch(actions.startAddFAPitchers());
    }
    
    render() {
    let {pitchers} = this.props;
    return (
            <div>
                <div className="row">
                    <div className="columns small-offset-2 small-centered small-8">
                        <img className="banner-img small-img" src="http://ultradmilb.zohosites.com/files/edited.png"/>
                    </div>
                </div>
                <div className="row">
                    <div className="columns small-offset-2 small-centered small-8">
                        <h3 className="center-text space-above">FA Pitchers 2017</h3>
                    </div>
                </div>
                <div className="big-table">
                    <SortableTable format={format} stats={pitchers} sortby={"player"} asc={true}/>
                </div>
            </div>
    )}
}

export default redux.connect(
    (state) => ({
        pitchers: state.fapitchers
    })
)(FAPitchersCurrent);