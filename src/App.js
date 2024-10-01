import "./index.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/body";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import AddProduct from "./components/AddProduct";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул Серий",
          img: "table.webp",
          desc: "Lorem ipsum dolar sit amet,consectetur adipisicing",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стол",
          img: "desk.webp",
          desc: "Lorem ipsum dolar sit amet,consectetur adipisicing",
          category: "tables",
          price: "149.00",
        },
        {
          id: 3,
          title: "Диван",
          img: "sofa.webp",
          desc: "Lorem ipsum dolar sit amet,consectetur adipisicing",
          category: "sofa",
          price: "690.00",
        },
        {
          id: 4,
          title: "Шкаф",
          img: "closet.webp",
          desc: "Lorem ipsum dolar sit amet,consectetur adipisicing",
          category: "closet",
          price: "550.00",
        },
        {
          id: 5,
          title: "Гарнитур",
          img: "headset.webp",
          desc: "Lorem ipsum dolar sit amet,consectetur adipisicing",
          category: "closet",
          price: "780.00",
        },
      ],
      showFull: false,
      fullItem: {},
      isShowAddButton: false,
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.onShowAddProduct = this.onShowAddProduct.bind(this);
    this.onCloseAddProduct = this.onCloseAddProduct.bind(this);
    this.onAddNewProduct = this.onAddNewProduct.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          orders={this.state.orders}
          onDelete={this.deleteOrder}
          onShowAddProduct={this.onShowAddProduct}
        />
        <Categories chooseCategory={this.chooseCategory} />
        <Body
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFull && (
          <ShowFullItem
            item={this.state.fullItem}
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
          />
        )}
        {this.state.isShowAddButton && (
          <AddProduct
            onCloseAddProduct={this.onCloseAddProduct}
            onAddNewProduct={this.onAddNewProduct}
          />
        )}
        <Footer />
      </div>
    );
  }
  onAddNewProduct() {
    console.log("hello");
  }
  onCloseAddProduct() {
    this.setState({
      isShowAddButton: false,
    });
  }
  onShowAddProduct() {
    this.setState({
      isShowAddButton: true,
    });
  }
  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFull: !this.state.showFull });
  }
  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (item.id === el.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
