var React = require("react");
import * as redux from "react-redux";
import * as actions from "actions";
import SortableTable from "SortableTable";

let format = [
        { key: "status", h: "Status", is_text: true }, {key: "player", h: "NAME", url: "player_url", is_text: true}, {key: "age", h: "Age"},
        { key: "team", h: "TEAM", is_text: true}, { key: "position", h: "POS", is_text: true}, { key: "games", h: "G"}, { key: "at_bats", h: "AB"},
        { key: "runs", h: "R"}, { key: "hits", h: "H"}, { key: "doubles", h: "2B"}, { key: "triples", h: "3B"},
        { key: "homers", h: "H"}, { key: "rbis", h: "RBI"}, { key: "total_bases", h: "TB"},  { key: "walks", h: "BB"}, 
        { key: "strike_outs", h: "SO"}, { key: "stolen_bases", h: "SB"}, { key: "caught_stealing", h: "CS"},  
        { key: "on_base_pct", h: "OBP"}, { key: "slugging", h: "SLG"}, { key: "avg", h: "AVG"}, { key: "on_plus_slugging", h: "OPS"} 
    ];
    
export class FAHittersCurrent extends  React.Component {
    componentWillMount() {
        this.props.dispatch(actions.startAddFAHitters());
    }
    
    render() {
        let {hitters} = this.props;
        console.log(format[0]);
        return (
            <div>
                <div className="row">
                    <div className="columns small-offset-2 small-centered small-8">
                        <img className="banner-img small-img" src="http://ultradmilb.zohosites.com/files/edited.png"/>
                    </div>
                </div>
                <div className="row">
                    <div className="columns small-offset-2 small-centered small-8">
                        <h3 className="center-text space-above">FA Hitters 2017</h3>
                    </div>
                </div>
                <SortableTable format={format} stats={hitters} sortby={"player"} asc={true}/>
            </div>
        )}
}

export default redux.connect(
    (state) => ({
        hitters: state.fahitters
    })
)(FAHittersCurrent);