var React = require("react");
var {Link, IndexLink} = require("react-router");

var Nav = () => {
    return (
      <div data-sticky-container>
        <div className="title-bar" role="navigation" data-sticky data-options="marginTop:0;" >
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text"><Link to="/">Ultra D</Link></li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li className="menu-text">Created by <a href="https://github.com/sjames1958gm" target="_blank">Stephen James</a></li>
              </ul>
            </div>
        </div>
      </div>
    );
};

module.exports = Nav;   
