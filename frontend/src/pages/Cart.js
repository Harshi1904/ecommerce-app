function Cart() {

  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;