import styled, {ThemeProvider} from "styled-components";

import React, {Component} from "react";

export default class DemoTheme extends Component {
  configDarkTheme = {
    background: "#000",
    color: "#FFF",
  };

  configLightTheme = {
    background: "#6633FF",
    color: "#FFF",
  };
  state = {
    currentTheme: this.configDarkTheme,
  };

  handleChangeTheme = (event) => {
    console.log("ahihi");
    this.setState({
      currentTheme:
        event.target.value === "1"
          ? this.configDarkTheme
          : this.configLightTheme,
    });
  };
  render() {
    const DivStyle = styled.div`
      color: ${(props) => props.theme.color};
      padding: 5%;
      background-color: ${(props) => props.theme.background};
    `;

    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <DivStyle>Hello minh la tien dep trai map u</DivStyle>
        <select onChange={this.handleChangeTheme}>
          <option value="1">Dark Theme</option>
          <option vlaue="2">Light Theme</option>
        </select>
      </ThemeProvider>
    );
  }
}
