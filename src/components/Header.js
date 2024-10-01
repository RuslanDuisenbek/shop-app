import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Order from "./Order";
import { FaFolderPlus } from "react-icons/fa6";

const showOrders = (orders, onDelete) => {
  let summ = 0;
  orders.forEach((element) => {
    summ += Number.parseFloat(element.price);
  });
  return (
    <div>
      {orders.map((el) => (
        <Order onDelete={onDelete} key={el.id} item={el} />
      ))}
      <p className="summ">
        The total summ:{new Intl.NumberFormat().format(summ)}$
      </p>
    </div>
  );
};
const showNothing = () => {
  return (
    <div className="empty">
      <h2>There are no products</h2>
    </div>
  );
};
export default function Header({ orders, onDelete, onShowAddProduct }) {
  let [cartOpen, setCartOpen] = useState(false);
  function handleCartOpen() {
    setCartOpen(!cartOpen);
    console.log(cartOpen);
  }
  return (
    <header>
      <div>
        <span className="logo">House staff</span>
        <ul className="menu">
          <li>About we</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <FaFolderPlus className="add-product" onClick={onShowAddProduct} />
        <FaCartShopping
          onClick={() => handleCartOpen()}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? showOrders(orders, onDelete) : showNothing()}
          </div>
        )}
      </div>
      <div className="presenation"></div>
    </header>
  );
}
// {orders.map((el) => (
//   <Order key={el.id} item={el} />
// ))}
