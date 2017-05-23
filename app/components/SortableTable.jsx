var React = require("react");
import Table from "Table";

class SortableTable extends React.Component {
    constructor(props) {
        super(props);
        let sortField = props.sortby || props.format[0].key;
        
        this.state = {
            sortField,
            asc: props.asc || true
        };
    }
    isText(format, field) {
        let obj = format.find((e) => e.key === field);
        return obj && obj.is_text;
    }
    sortNumeric(a, b, asc) {
        return asc ? b-a : a-b;
    }
    sortText(a, b, asc) {
        let n = asc ? -1 : 1;
        return (a < b) ? n : -n;
    }
    onClick(field) {
        let {sortField, asc} = this.state;
        if (sortField === field) {
            this.setState({
                sortField,
                asc: !asc
            })
        } else {
            this.setState({
                sortField: field,
                asc: true
            })
        }
    }
    render() {
        let { format, stats } = this.props;
        let { sortField, asc } = this.state;
        let sorted = stats.slice();
        let isText = this.isText(format, sortField);
        
        if (sortField) sorted.sort((a, b) => (isText ? this.sortText(a[sortField],b[sortField],asc) : this.sortNumeric(a[sortField],b[sortField],asc)));

        return <Table format={format} stats={sorted} onClick={this.onClick.bind(this)}/>;
        
    }
}

module.exports = SortableTable;