import { useState } from "react";

function Home() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Sports Shoes", price: 1999 },
    { id: 2, name: "Smart Watch", price: 2999 },
    { id: 3, name: "Headphones", price: 1499 }
  ];

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    alert("Product Added to Cart");
  };

  return (
    <div>
      <h1>E-Commerce Store</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          <button
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Home;