import React from "react";
import { Button, Item, Label, Container, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { WithProductService } from "../../hoc";

import StarterKitsModalDescription from "./StarterKitsModalDescription";
import AddOnsItemsMain from "../addonsitems/AddOnsItemsMain";
import { fetchStarterKitsProducts } from "../../redux/actions/getAllStarterKitsAction";

class StarterKitsMain extends React.Component {
  componentDidMount() {
    this.props.getStarterKitsProducts();
  }
  render() {
    const {
      starterKitsItem,
      starterKitsItemLoading,
      starterKitsItemError
    } = this.props;

    console.log(starterKitsItem);

    if (starterKitsItemError) {
      return <div>{starterKitsItemError.message}</div>;
    }
    if (
      starterKitsItemLoading ||
      starterKitsItemLoading === undefined ||
      starterKitsItem === undefined ||
      !starterKitsItem.length
    ) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Container style={{ paddingTop: "15px", paddingBottom: "15px" }}>
          <Item.Group divided>
            {starterKitsItem.map(item => (
              <Item key={item.id}>
                <Item.Image
                  label={{
                    as: "a",
                    color: "orange",
                    content: item.price + " $",
                    icon: "tag",
                    size: "large",
                    ribbon: true
                  }}
                  size="large"
                  bordered
                  src={item.image}
                />

                <Item.Content>
                  <Item.Header as="a">{item.name}</Item.Header>
                  <Item.Meta>{item.category}</Item.Meta>

                  <Item.Extra>
                    {item.available === "true" ? (
                      <Label as="a" color="teal" tag>
                        Available
                      </Label>
                    ) : (
                      <Label as="a" color="red" tag>
                        Sold Out
                      </Label>
                    )}
                  </Item.Extra>
                  <Item.Description>
                    <p>{item.description}</p>
                  </Item.Description>
                  <Item.Extra>
                    <StarterKitsModalDescription />
                  </Item.Extra>
                  <Item.Extra>
                    <Button.Group floated="right">
                      <Link
                        to={{
                          pathname: "/collections/all-sets"
                        }}
                      >
                        <Button basic color="orange">
                          Make Your Own Kit
                        </Button>
                      </Link>

                      <Button.Or />
                      {item.available === "true" ? (
                        <Button positive>Add To Cart</Button>
                      ) : (
                        <Button positive disabled>
                          Add To Cart
                        </Button>
                      )}
                    </Button.Group>
                  </Item.Extra>
                </Item.Content>
              </Item>
            ))}
          </Item.Group>
        </Container>
        <Divider />
        <Container style={{ paddingTop: "15px", paddingBottom: "15px" }}>
          <AddOnsItemsMain />
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { productService }) => {
  return {
    getStarterKitsProducts: fetchStarterKitsProducts(dispatch, productService)
  };
};

const mapStateToProps = storeData => {
  return {
    starterKitsItem: storeData.getAllStarterKitsData.STARTER_KITS_ITEMS,
    starterKitsItemLoading: storeData.getAllStarterKitsData.loading,
    starterKitsItemError: storeData.getAllStarterKitsData.error
  };
};
export default WithProductService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StarterKitsMain)
);
