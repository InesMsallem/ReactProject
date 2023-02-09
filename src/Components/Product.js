import { Component } from "react";
import { Card, Button, Alert } from "react-bootstrap";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
      showAlert: false,
    };
    this.addLike = this.addLike.bind(this);
  }

  addLike(e) {
    e.preventDefault();
    this.setState((oldState) => ({
      product: { ...oldState.product, like: oldState.product.like + 1 },
    }));
    console.log(this.state.product.like);
  }
  buy = () => {
    this.setState({ showAlert: true });
    setTimeout(() => this.setState({ showAlert: false }), 2000);
  };
  render() {
    return (
      <>
        <Card style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src={require("../assets/images/" + this.props.product.img)}
          />
          <Card.Body>
            <Card.Title>{this.props.product.name}</Card.Title>
            <Card.Subtitle>{this.props.product.description}</Card.Subtitle>
            <Card.Subtitle>{this.props.product.price}</Card.Subtitle>
            <Card.Subtitle>{this.state.product.like}</Card.Subtitle>
            <Button onClick={this.addLike} variant="primary">
              like
            </Button>
            <Button
              style={{ marginLeft: "100px" }}
              disabled={this.state.product.quantity === 0}
              onClick={this.buy}
              variant="primary"
            >
              Buy
            </Button>
          </Card.Body>
        </Card>
        <Alert
          show={this.state.showAlert}
          variant="success"
          onClose={() => this.state.showAlert(false)}
          dismissible
        >
          <Alert.Heading> </Alert.Heading>
          <p> You bought this item </p>
        </Alert>
      </>
    );
  }
}
export default Product;
