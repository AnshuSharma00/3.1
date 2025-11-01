import React from "react";

const ProductCard = ({ name, price, status }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    width: "200px",
    margin: "10px",
  },
  name: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
};

export default ProductCard;
