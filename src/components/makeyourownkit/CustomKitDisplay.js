import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";

import CustomKitMain from "./CustomKitMain";
import CustomKitItemList from "./CustomKitItemList";

class CustomKitDisplay extends Component {
  render() {
    return (
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Segment><CustomKitItemList /></Segment>
            <Segment><CustomKitMain /></Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default CustomKitDisplay;
