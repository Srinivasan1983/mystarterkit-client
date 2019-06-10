import React, { Component } from "react";
import { Card, Segment, Checkbox } from "semantic-ui-react";

class CustomKit extends Component {
  render() {
    const { item, callbackToggleCheckbox, checkItemsIfPresent } = this.props;
    return (
      <>
        <Card.Group>
          {item.individualItems.map(rec => (
            <Card key={rec.id}>
              <Card.Content>
                <Card.Header>{rec.name}</Card.Header>
                <Card.Meta>{rec.price} $</Card.Meta>
                <Card.Description>
                  <Segment compact>
                    <Checkbox
                      onChange={() => callbackToggleCheckbox(rec.productId)}
                      checked={!!checkItemsIfPresent.includes(rec.productId)}
                      toggle
                    />
                  </Segment>
                  .
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </>
    );
  }
}

export default CustomKit;
