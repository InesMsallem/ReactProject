import { Component } from "react";
import Product from "./Product";
import products from "../products.json";
import { Container, Row, Col, Alert } from "react-bootstrap";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "PC Lenovo",
        price: "1400",
        img: "product1.webp",
        like: 0,
        quantity: 10,
        description:
          "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
      },
      showMessage: false,
    };
  }
 

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
    if (prevState.product !== this.state.product) {
      this.setState({ loading: false });
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  componentDidMount() {
    console.log("Component did mount");
    setTimeout(() => this.setState({ showMessage: true }), 0);
    setTimeout(() => this.setState({ showMessage: false }), 3000);
  }

  render() {
    return (
      <>
        <Alert
          show={this.state.showMessage}
          variant="success"
          onClose={() => this.state.showMessage(false)}
          dismissible
        >
          <Alert.Heading>Hey, Welcome to our shop MyStore </Alert.Heading>
          <p>
            {" "}
            Thank you for choosing our store, we hope you enjoy your shopping
            experience{" "}
          </p>
        </Alert>
        <Container style={{ marginTop: "2rem" }}>
          <Row>
            {products.map((product, index) => (
              <Col style={{ margin: "1rem" }} key={index} lg={3}>
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        </Container>
        
      </>
    );
  }
}
export default Products;
