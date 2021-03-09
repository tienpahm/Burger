import React, {Component} from "react";
import {Container} from "../Container/Container";
import {ThemeProvider} from "styled-components";
import {ToDoListDarkTheme} from "../../JSSDemo/Theme/ToDoListDarkTheme";
import {ToDoListLightTheme} from "../../JSSDemo/Theme/ToDoListLightTheme";

export default class ToDoList extends Component {
  render() {
    return (
      <ThemeProvider theme={ToDoListLightTheme}>
        <Container>123</Container>
      </ThemeProvider>
    );
  }
}
