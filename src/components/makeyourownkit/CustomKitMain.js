import React from "react";
import { Item, Accordion, Icon, Container, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { WithProductService } from "../../hoc";

import { fetchCustomProductBySetId } from "../../redux/actions/customProductStateActions";
import { fetchAllCustomProductKitsIds } from "../../redux/actions/customKitIdsStateAction";
import { fetchCustomProductByListItems } from "../../redux/actions/customProductItemListAction";
import CustomKit from "./CustomKit";

class CustomKitMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: false, customKit: null, items: [] };
  }

  handleClick = (e, index) => {
    const currIndex = this.state.activeIndex;
    if (currIndex === index) {
      this.setState({ activeIndex: false });
    } else {
      this.setState({ activeIndex: index }, async () => {
        await this.callFetchIndividualSets();
      });
    }
  };

  toggleCheckbox = PID => {
    // console.log(itemId);
    const { items } = this.state;
    if (items.includes(PID)) {
      const index = items.indexOf(PID);
      console.log(index, PID);

      items.splice(index, 1);

      this.setState({ items }, () => {
        this.props.fetchCustomListItems(this.state.items);
      });
    } else {
      items.push(PID);
      this.setState({ items }, () => {
        this.props.fetchCustomListItems(this.state.items);
      });
    }
    console.log(items);
  };

  callFetchIndividualSets = () => {
    this.props.fetchIndividualSets(this.state.activeIndex);
  };

  componentDidUpdate(prevProps) {
    if (this.props.customProducts !== prevProps.customProducts) {
      if (
        prevProps.customProducts === undefined &&
        this.props.customProducts.setId
      ) {
        this.setState({ customKit: this.props.customProducts });
      } else {
        this.setState({ customKit: this.props.customProducts });
      }
    }
  }

  componentDidMount() {
    this.props.fetchAllSetIds();
  }

  render() {
    const { activeIndex } = this.state;

    if (
      this.props.kitIdsLoading ||
      this.props.kitIds === 0 ||
      this.props.kitIds === undefined
    ) {
      return <h3>Loading...</h3>;
    }

    return (
      <Container>
        <Item.Group>
          {this.props.kitIds.map(kit => (
            <Item key={kit.id}>
              <Item.Image
                size="small"
                src={kit.image}
              />
              <Item.Content verticalAlign="middle">
                <Item.Header>Category :{kit.name}</Item.Header>
                <Divider/>
                <Accordion fluid styled>
                  <Accordion.Title
                    active={activeIndex === kit.id}
                    index={kit.id}
                    onClick={e => this.handleClick(e, kit.id)}
                  >
                    <Icon name="dropdown" />
                    Starter Kit- Select Your Own Kit
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === kit.id}>
                    <>
                      {this.state.customKit === null
                        ? "Loading.."
                        : this.state.customKit.map(item => (
                            <CustomKit
                              key={item.setId}
                              callbackToggleCheckbox={this.toggleCheckbox}
                              checkItemsIfPresent={this.state.items}
                              item={item}
                            />
                          ))}
                    </>
                  </Accordion.Content>
                </Accordion>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch, { productService }) => {
  return {
    fetchIndividualSets: fetchCustomProductBySetId(dispatch, productService),
    fetchAllSetIds: fetchAllCustomProductKitsIds(dispatch, productService),
    fetchCustomListItems: fetchCustomProductByListItems(
      dispatch,
      productService
    )
  };
};
const mapStateToProps = storeData => {
  return {
    kitIds: storeData.customKitIdsStateData.CUSTOM_PRODUCT_KIT_IDS,
    kitIdsLoading: storeData.customKitIdsStateData.loading,
    kitIdsError: storeData.customKitIdsStateData.error,
    customProducts: storeData.customProductStateData.CUSTOM_PRODUCTS,
    customProductsLoading: storeData.customProductStateData.loading,
    customProductsError: storeData.customProductStateData.error
  };
};
export default WithProductService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomKitMain)
);
