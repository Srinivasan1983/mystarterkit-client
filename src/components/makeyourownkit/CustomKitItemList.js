import React, { Component } from "react";
import { Table, Header, Button, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { WithProductService } from "../../hoc";

class CustomKitItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      category: 0,
      totalItems: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.customProductItemList !== prevProps.customProductItemList) {
      this.setState(
        { category: this.props.customProductItemList.length },
        () => {
          if (this.state.category === 0) {
            this.setState({
              total: parseFloat(0),
              totalItems: 0
            });
          }
        }
      );
      let priceList = [];
      this.props.customProductItemList.map(rec =>
        // eslint-disable-next-line array-callback-return
        rec.map(item => {
          priceList.push(parseFloat(item.price));

          let sum = priceList.reduce((acc, val) => {
            return acc + val;
          });
          this.setState({ total: sum }, () => {
            this.setState({ totalItems: priceList.length });
          });
        })
      );
    }
  }

  render() {
    // console.log(this.props.customProductItemList);

    return (
      <Container style={{ overflow: "auto", maxHeight: 200 }}>
        <Table color={"orange"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Product Id</Table.HeaderCell>
              <Table.HeaderCell>Product Name</Table.HeaderCell>
              <Table.HeaderCell>Product Price</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.customProductItemList === undefined ? (
              <Table.Row disabled>
                <Table.Cell>Please make your own kit...</Table.Cell>
                <Table.Cell>Please make your own kit...</Table.Cell>
                <Table.Cell>Please make your own kit...</Table.Cell>
                <Table.Cell>Please make your own kit...</Table.Cell>
              </Table.Row>
            ) : (
              this.props.customProductItemList.map(rec =>
                rec.map(item => (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.category}</Table.Cell>
                    <Table.Cell>{item.productId}</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.price}</Table.Cell>
                  </Table.Row>
                ))
              )
            )}
          </Table.Body>
          <Table.Footer>
            <Table.Row positive>
              <Table.HeaderCell>
                <Header as="h4">{this.state.category} Categories</Header>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Header as="h4">{this.state.totalItems} Items</Header>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Header as="h4">Total Price</Header>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Header as="h3">{this.state.total.toFixed(2)} $</Header>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Button.Group floated="right">
                  <Link
                    to={{
                      pathname: "/"
                    }}
                  >
                    <Button basic color="orange">
                    100% READY KIT
                    </Button>
                  </Link>

                  <Button.Or />
                  <Button positive>Add To Cart</Button>
                </Button.Group>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = storeData => {
  return {
    customProductItemList:
      storeData.customProductItemListData.CUSTOM_PRODUCT_KIT_ITEM_LIST,
    customProductItemListLoading: storeData.customProductStateData.loading,
    customProductItemListError: storeData.customProductStateData.error
  };
};
export default WithProductService()(
  connect(
    mapStateToProps,
    null
  )(CustomKitItemList)
);
