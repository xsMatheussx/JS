import { useEffect, useState } from "react";
import { Card } from "./components/card/index";
import "./index.css";

export function App() {
  const [produtos, setProduto] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProduto(data.products));
  }, []);

  return (
    <div className="grid">
      {produtos &&
        produtos.map((produto) => (
          <Card
            key={produto.id}
            title={produto.title}
            description={produto.description}
            price={produto.price}
            image={produto.thumbnail}
          />
        ))}
    </div>
  );
}
