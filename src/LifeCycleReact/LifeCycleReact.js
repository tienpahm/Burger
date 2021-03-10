import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycleReact extends Component {
  //bình thường không khai báo thì react vẫn hiểu nhưng để khai báo chuẩn thì ta khai báo như bên dưới cho nên đây là lí do lâu lâu ta thấy có người thêm constructor
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    console.log("constructor");
  }
  //đây là cách tắt
  //   state = {number: 1};

  //hàm được gọi khi component được sử dụng trên DOM (giao diện của app)
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  //Hàm này được gọi khi setState hoặc próp
  shouldComponentUpdate() {
    //Nếu return về tru thì chạy tiếp các lifecycle còn lại ngược lại return false thì không chạy tiếp
    return true;
  }

  render() {
    console.log("renderParent");
    return (
      <div>
        <h1>Parent Component</h1>
        <span>Number : {this.state.number}</span>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}>
          <i className="fa fa-plus"></i>
        </button>
        {this.state.number === 1 ? <ChildComponent /> : ""}
      </div>
    );
  }
  //Được gọi sau renderr và chỉ gọi 1 lần duy nhất (trạng thái mounting)
  componentDidMount() {
    console.log("componentDidMount");
  }
  //lần đầu sẽ không gọi chỉ gọi khi set state hoặc thay đổi props
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
