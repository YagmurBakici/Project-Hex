import React, { Component } from "react";
import { getAllProducts } from "api/apiHandler";
import { Link } from "react-router-dom";

export default class ProductsList extends Component {
  state = { products: [] };
  //sayfa yüklendikten sonra karşına ilk çıkan sonra  sadece bir kez kullanabilirsin componentta
  componentDidMount() {
    getAllProducts()
      .then(res => this.setState({ products: res.data.products }))
      .catch(err => console.error(err.response));
  }
  render() {
    const { products } = this.state;
    return (
      <ul className="list">
        {products.map((product, index) => (
          <li className="item" key={index}>
            <Link to={`/products/${product._id}`}>
              <p>
                name: {product.name} <b>({product.ref})</b>
              </p>
              <p>price: {product.price}</p>
              <ul className="list categories">
                <li className="item category">products</li>
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
