import React, {Component} from "react";
import {connect} from "react-redux";
class Beef extends Component {
  renderBeef = () => {
    let html = [];
    this.props.burger.map((item, index) => {
      if (item.name === "beef") {
        for (let i = 0; i < item.amount; i++) {
          html.push(<div className="beef"></div>);
        }
      }
    });
    return html;
  };
  render() {
    return <div>{this.renderBeef()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
  };
};

export default connect(mapStateToProps)(Beef);
