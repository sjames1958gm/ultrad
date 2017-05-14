import React from "react";
import * as redux from "react-redux";
import * as actions from "actions";

import Rankings from "Rankings";

export class UltraDApp extends React.Component {
    componentWillMount() {
        this.props.dispatch(actions.startAddRankings());
    }
    
    onHittingStats() {
        this.context.router.push('/hitting-stats');
    }

    onPitchingStats() {
        this.context.router.push('/pitching-stats');
    }
    
    render() {
        let {rankings} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="columns small-offset-2 small-centered small-8">
                        <img className="banner-img" src="http://ultradmilb.zohosites.com/files/edited.png"/>
                    </div>
                </div>
                <div className="main-body">
                    <div className="row">
                        <div className="columns small-offset-2 small-9">
                            <h3>UltraD MiLB Stats Page</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="columns small-offset-2 small-9">
                            <img src="http://ultradmilb.zohosites.com//files/Minor-League-Baseball-Logo-1024x623.png" width="100px"/>
                            <span className="space-left" >Just a for-fun place to store some MiLB stats and see how your farm roster is stacking up in UltraD.</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="row space-above">
                        <div className="columns small-offset-2 small-6">
                            <div className="row">
                                <h4>Hitters</h4>
                            </div>
                            <div className="row">
                                <p className="indent">Hitting stats are seasonal -- not calculated just when the player is on your roster. Hitting stats are AVG, SLG, HRs, RBIs, and NSB. 
                                (OBP was challenging for a team as sac fly and hbp are not readily available)</p>
                            </div>
                            <div className="row">
                                <button className="button" onClick={this.onHittingStats.bind(this)}>Hitting Details</button>
                            </div>
                            <div className="row">
                                <h4>Pitchers</h4>
                            </div>
                            <div className="row">
                                <p className="indent">Pitching stats are seasonal -- not calculated just when the player is on your roster. 
                                Pitching stats are ERA, WHIP, Ks9, Wins and HLD+SV</p>
                            </div>
                            <div className="row">
                                <button className="button" onClick={this.onPitchingStats.bind(this)}>Pitching Details</button>
                            </div>
                            <div className="row">
                                <h4>Free Agent Stats</h4>
                            </div>
                            <div className="row">
                                <p className="indent">(default ordering - hitting Age then SLG, pitching Age then WHIP)</p>
                            </div>
                            <div className="row">
                                <button className="button">FA Hitters Current Stats 2017</button>
                            </div>
                            <div className="row">
                                <button className="button">FA Pitchers Current Stats 2017</button>
                            </div>
                            <div className="row">
                            <h4>Stats for assigned MiLB players in UltraD</h4>
                            </div>
                            <div className="row">
                                <p className="indent">(default ordering - hitting SLG, pitching WHIP)</p>
                            </div>
                            <div className="row">
                                <button className="button">UltraD Assigned MiLB Hitters</button>
                            </div>
                            <div className="row">
                                <button className="button">UltraD Assigned MiLB Pitchers</button>
                            </div>
                        </div>
                        <div className="columns small-3">
                            <div className="row center-text">
                                <p>MiLB Rankings</p>
                            </div>
                            <div className="row">
                                {rankings.length ? <Rankings rankings={rankings}/> : "Loading"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UltraDApp.contextTypes = {
  router: () => React.PropTypes.func.isRequired
};

export default redux.connect(
    (state) => ({
        rankings: state.rankings
    })
)(UltraDApp);
