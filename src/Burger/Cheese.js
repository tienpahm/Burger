import React, {Component} from "react";
import {connect} from "react-redux";
class Cheese extends Component {
  renderCheese = () => {
    let html = [];
    this.props.burger.map((item, index) => {
      if (item.name === "cheese") {
        for (let i = 0; i < item.amount; i++) {
          html.push(<div className="cheese"></div>);
        }
      }
    });
    return html;
  };
  render() {
    return <div>{this.renderCheese()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
  };
};

export default connect(mapStateToProps)(Cheese);
