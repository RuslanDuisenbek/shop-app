import React from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
export class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      name: null,
      price: null,
      desc: null,
      cat: null,
    };
    this.handleImageChange = this.handleImageChange.bind(this);
  }
  handleImageChange = (event) => {
    this.setState({
      selectedImage: URL.createObjectURL(event.target.files[0]),
    });
  };

  render() {
    return (
      <div className="addProduct">
        <div className="products">
          <FaRegCircleXmark
            className="close"
            onClick={this.props.onCloseAddProduct}
          />
          <label htmlFor="fileInput" className="fileLabel">
            {this.state.selectedImage ? "Image selected" : "Choose an image"}
          </label>
          <input
            id="fileInput"
            type="file"
            onChange={this.handleImageChange}
            className="img"
            // value={this.state.selectedImage}
          />
          <input
            type="text"
            placeholder="name"
            className="name"
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
          <input
            type="number"
            step="0.01"
            placeholder="Enter price"
            min="0"
            className="price"
            value={this.state.price}
            onChange={(event) => {
              this.setState({ price: event.target.value });
            }}
          />
          <input
            type="text"
            placeholder="description"
            className="desc"
            value={this.state.desc}
            onChange={(event) => {
              this.setState({ desc: event.target.value });
            }}
          />
          <input
            type="text"
            placeholder="category"
            className="desc"
            value={this.state.cat}
            onChange={(event) => {
              this.setState({ cat: event.target.value });
            }}
          />
        </div>
        <div className="bttn_div">
          <button className="addPr" onClick={this.props.onAddNewProduct()}>
            Add Product
          </button>
        </div>
      </div>
    );
  }
}

export default AddProduct;
