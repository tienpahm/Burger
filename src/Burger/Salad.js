import React, {Component} from "react";
import {connect} from "react-redux";

class Salad extends Component {
  renderSalad = () => {
    let html = [];
    this.props.burger.map((item, index) => {
      if (item.name === "salad") {
        for (let i = 0; i < item.amount; i++) {
          html.push(<div className="salad"></div>);
        }
      }
    });
    return html;
  };

  render() {
    return <div>{this.renderSalad()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
  };
};

export default connect(mapStateToProps)(Salad);
