import React, {Component} from "react";
import {connect} from "react-redux";

class Receipt extends Component {
  renderReceipt = () => {
    return this.props.burger.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.UpDownAmount(item.name, true);
              }}>
              +
            </button>
            {item.amount}
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.UpDownAmount(item.name, false);
              }}>
              -
            </button>
          </td>
          <td>{item.price}</td>
          <td>{item.price * item.amount}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h3 className="text-center">Chọn thức ăn</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th></th>
              <th>Đơn giá</th>
              <th>Thành Tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderReceipt()}</tbody>
          <tfoot>
            <tr>
              <td colSpan="2"></td>
              <td>Tổng Tiền</td>
              <td>
                {this.props.burger.reduce((total, item, index) => {
                  return (total += item.amount * item.price);
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {burger: state.BurgerReducer.burger};
};
const mapDispatchToProps = (dispatch) => {
  return {
    UpDownAmount: (name, num) => {
      let action = {
        type: "TANG_GIAM",
        name,
        num,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Receipt);
