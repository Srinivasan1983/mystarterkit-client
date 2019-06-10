import React from "react";
import { Grid, Image, Segment, Label, Button } from "semantic-ui-react";

import { connect } from "react-redux";
import { WithProductService } from "../../hoc";
import { fetchAddOnsKitsProducts } from "../../redux/actions/getAllAddOnsKitsActions";

class AddOnsItemsMain extends React.Component {
  componentDidMount() {
    this.props.getAddOnsKitsProducts();
  }
  render() {
    const {
      addOnsKitsItem,
      addOnsKitsItemLoading,
      addOnsKitsItemError
    } = this.props;

    console.log(addOnsKitsItem);

    if (addOnsKitsItemError) {
      return <div>{addOnsKitsItemError.message}</div>;
    }
    if (
      addOnsKitsItemLoading ||
      addOnsKitsItemLoading === undefined ||
      addOnsKitsItem === undefined ||
      !addOnsKitsItem.length
    ) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <br />
        <h1>Add-ons</h1>
        <Grid doubling columns={4}>
          {addOnsKitsItem.map(item => (
            <Grid.Column key={item.id}>
              <Segment>
                <Label as="a" basic color="black" size="large" pointing="below">
                  {item.name}
                </Label>
                <Image
                  src={item.image}
                  label={{
                    as: "a",
                    color: "orange",
                    content: item.price,
                    icon: "euro sign",
                    ribbon: true
                  }}
                />
                {item.available === "true" ? (
                  <Button fluid color="black" basic>
                    Add To Cart
                  </Button>
                ) : (
                  <Button fluid color="red" basic disabled>
                    Sold Out
                  </Button>
                )}
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { productService }) => {
  return {
    getAddOnsKitsProducts: fetchAddOnsKitsProducts(dispatch, productService)
  };
};

const mapStateToProps = storeData => {
  return {
    addOnsKitsItem: storeData.getAllAddOnsKitsData.ADDONS_KITS_ITEMS,
    addOnsKitsItemLoading: storeData.getAllAddOnsKitsData.loading,
    addOnsKitsItemError: storeData.getAllAddOnsKitsData.error
  };
};
export default WithProductService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddOnsItemsMain)
);
