/* global $ */
var React = require("react");
require("floatthead");

class Table extends  React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $(this.table).floatThead({
            debug: true, 
            scrollContainer: function($table){
                console.log( $table.closest('.wrapper'));
                return $table.closest('.wrapper');
	        }
        });
    }
    render() {
        let {format, stats} = this.props;
        return (
            <div >
                <div className="main-body wrapper" style={{height: '500px'}}>
                    <table ref={(table) => { this.table = table; }} className="rankings">
                        <thead>
                            <tr className="header">
                            {
                                format.map((e, i) => (<th className="center-text" key={i}>{e.h}</th>))
                            }
                            </tr>
                        </thead>
                        <tbody className="center-text">
                            {
                                stats.map((h,i) => {
                                    return <tr key={i}>
                                        {format.map((e, i) => {
                                            return (h[!e.url] ? 
                                                        <td key={e.h + i}>{h[e.key]}</td> :
                                                        <td key={e.h + i}><a href={h[e.url]} target="_blank">{h[e.key]}</a></td>)
                                        })}
                                    </tr>})
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

module.exports = Table;