var React = require("react");

export class ColumnStats extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hidden: true,
        myclass: "hidden"
      };
    }
    
    onToggle() {
        let hidden = !this.state.hidden;
        this.setState({
            hidden: hidden,
            myclass: hidden ? "hidden" : ""
        });
    }

    render() {
        let {sortKey, sortType, columns, title, heading1, heading2, heading3, heading4, heading5, heading6, key1, key2, key3, key4, key5, key6 } = this.props;
        let columnsClass = "small-offset-2 small-8";
        let stats = this.props.values.slice(0);
        if (sortKey.length > 0) {
            if (sortType === "numeric") {
                stats.sort((a, b) => +b[sortKey] - +a[sortKey]);
            } else {
                stats.sort((a, b) => a[sortKey] > b[sortKey] ? 1 : -1);
            }
        }
    
        let heading;
        switch (columns) {
            case "2":
                heading = <tr className="header"><th>{heading1}</th><th>{heading2}</th></tr>;
            break;
            case "3":
                heading = <tr className="header"><th>{heading1}</th><th>{heading2}</th><th>{heading3}</th></tr>;
            break;
            case "6":
                heading = <tr className="header"><th>{heading1}</th><th>{heading2}</th><th>{heading3}</th><th>{heading4}</th><th>{heading5}</th><th>{heading6}</th></tr>;
                columnsClass = "small-offset-1 small-10";
            break;
        }
        return (
            <div>
                <div className="row space-above center-text">
                    <div className={"columns " + columnsClass}>
                        <h4 className="stats-title">{title}</h4>
                        <span onClick={this.onToggle.bind(this)}>
                         {this.state.hidden ? <i className="fa fa-caret-right" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i> }
                        </span>
                    </div>
                </div>
                <div className={this.state.myclass + " row space-above"}>
                    <div className={"columns " + columnsClass}>
                        <table className="rankings"> 
                            <tbody className="center-text">
                                {heading}
                                    { stats.map((v) => {
                                        switch (columns) {
                                        case "2":
                                            return <tr key={v[key1]}><td>{v[key1]}</td><td>{v[key2]}</td></tr>;
                                        case "3":
                                            return <tr key={v[key1]}><td>{v[key1]}</td><td>{v[key2]}</td><td>{v[key3]}</td></tr>;
                                        case "6":
                                            return <tr key={v[key1]}><td>{v[key1]}</td><td>{v[key2]}</td><td>{v[key3]}</td><td>{v[key4]}</td><td>{v[key5]}</td><td>{v[key6]}</td></tr>;
                                        }
                                    }
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
};
                    
                    
module.exports = ColumnStats;