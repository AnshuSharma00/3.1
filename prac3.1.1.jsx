import React from "react";
import ProductCard from "./ProductCard";

const App = () => {
  const products = [
    { name: "Wireless Mouse", price: 25.99, status: "In Stock" },
    { name: "Keyboard", price: 45.5, status: "Out of Stock" },
    { name: "Monitor", price: 199.99, status: "In Stock" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Products List</h2>
      <div style={styles.grid}>
        {products.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            price={item.price}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    border: "1px solid #000",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "800px",
    margin: "40px auto",
  },
  title: {
    marginBottom: "20px",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
};

export default App;
