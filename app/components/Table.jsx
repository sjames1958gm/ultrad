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
                return $table.closest('.wrapper');
	        }
        });
    }
    render() {
        let {format, stats, onClick} = this.props;
        console.log(format);
        return (
            <div >
                <div className="main-body wrapper" style={{height: '500px'}}>
                    <table ref={(table) => { this.table = table; }} className="rankings">
                        <thead>
                            <tr className="header">
                            {
                                format.map((e, i) => (<th className="center-text" key={i} onClick={() => onClick(e.key)}>{e.h}</th>))
                            }
                            </tr>
                        </thead>
                        <tbody className="center-text">
                            {
                                stats.map((s,i) => {
                                    return <tr key={i}>
                                        {format.map((e, i) => {
                                            return (!e.url ? 
                                                        <td key={e.h + i}>{s[e.key]}</td> :
                                                        <td key={e.h + i}><a href={s[e.url]} target="_blank">{s[e.key]}</a></td>)
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