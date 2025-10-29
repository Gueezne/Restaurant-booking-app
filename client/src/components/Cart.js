// components/Cart.js

import React, { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext";

const Cart = (props) => {
	const { cartItems = [], totalPrice = 0 } = useContext(RestaurantContext) || {};

	return (
		<div className="cart" style={props.style}>
			<h3>Cart</h3>
			<p>Total: ${totalPrice}</p>
			<ul>
				{cartItems && cartItems.length > 0 ? (
					cartItems.map((item) => (
						<li key={item._id || item.name}>
							{item.name} x {item.quantity}
						</li>
					))
				) : (
					<li>No items in cart</li>
				)}
			</ul>
		</div>
	);
};

export default Cart;
