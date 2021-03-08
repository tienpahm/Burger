import React, {Component} from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },

    error: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  };
  handleChangeValue = (event) => {
    let {name, value} = event.target;
    let newValues = {...this.state.values, [name]: value};
    let newErrors = {...this.state.error};

    if (value.trim() === "") {
      newErrors[name] = name + "is required";
    } else {
      newErrors[name] = "";
    }

    if (name === "email") {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(value)) {
        newErrors[name] = name + "khong hop le ";
      } else {
        newErrors[name] = "";
      }
    }

    if (name === "passwordConfirm") {
      if (value === newValues.password) {
        newErrors[name] = "";
      } else {
        newErrors[name] = "not matching";
      }
    }

    this.setState({
      values: newValues,
      error: newErrors,
    });
  };

  handleSubmit = (event) => {
    //Cản trình duyệt tải lại trang
    event.preventDefault();
    //Xéta điều kiện khi submit
    let valid = true;
    let {values, error} = this.state;
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
    }

    for (let key in error) {
      if (error[key] !== "") {
        valid = false;
      }
    }

    if (!valid) {
      alert("Dữ liệt không hợp lệ");
      return;
    }

    alert("Success");
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#eeeeee",
          position: "relative",
          height: "700px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <form style={{width: "38%"}}>
          <h1 className="text-center">User Profile</h1>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.firstName}
                    type="text"
                    name="firstName"
                    required
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <span className="text-danger">
                    {this.state.error.firstName}
                  </span>
                  <label>First Name</label>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.lastName}
                    type="text"
                    required
                    name="lastName"
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <span className="text-danger">
                    {this.state.error.lastName}
                  </span>
                  <label>Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="group ml-3">
                    <input
                      value={this.state.values.userName}
                      type="text"
                      name="userName"
                      required
                      style={{width: "100%"}}
                      onChange={this.handleChangeValue}
                    />
                    <span className="highlight" />
                    <span className="bar" />
                    <span className="text-danger">
                      {this.state.error.userName}
                    </span>
                    <label>User Name</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="group ml-3">
                    <input
                      value={this.state.values.email}
                      type="email"
                      name="email"
                      required
                      style={{width: "100%"}}
                      onChange={this.handleChangeValue}
                    />
                    <span className="highlight" />
                    <span className="bar" />
                    <span className="text-danger">
                      {this.state.error.email}
                    </span>
                    <label>Email</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.password}
                    type="password"
                    required
                    name="password"
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <span className="text-danger">
                    {this.state.error.password}
                  </span>
                  <label>Password</label>
                </div>
              </div>

              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.passwordConfirm}
                    type="password"
                    required
                    name="passwordConfirm"
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <span className="text-danger">
                    {this.state.error.passwordConfirm}
                  </span>
                  <label>Password Confirm</label>
                </div>
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn btn-success bg-dark w-100"
                onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
