import React, {Component} from "react";
import Beef from "./Beef";
import Cheese from "./Cheese";
import Receipt from "./Receipt";
import Salad from "./Salad";
import "./Burger.css";

export default class Burger extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <div className="text-center">
              <h1>Bài Tập Burger CyberSoft</h1>
              <p>Bánh burger của bạn</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="burger-top"></div>
              <Salad />
              <Cheese />
              <Beef />
              <div className="burger-bot"></div>
            </div>
          </div>
          <div className="col-6">
            <Receipt />
          </div>
        </div>
      </div>
    );
  }
}
