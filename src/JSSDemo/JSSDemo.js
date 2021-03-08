import React, {Component} from "react";
import {Button, SmallButton} from "./Component/Button";
import {StyledLink} from "./Component/Link";
import {TextField} from "./Component/Text";

export default class JSSDemo extends Component {
  render() {
    return (
      <div>
        <Button className="styled-button" primary fontSizeX2>
          ahihi
        </Button>
        <SmallButton>CHi</SmallButton>
        <StyledLink className="ahihi" id="ahuhu">
          CHi Map U
        </StyledLink>
        <TextField inputColor="green"></TextField>
      </div>
    );
  }
}
