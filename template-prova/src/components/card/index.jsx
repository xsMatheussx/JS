import "./style.css";
import { useState } from "react";
import { Plus, Minus, LucideShoppingCart } from "lucide-react";

export function Card({ id, title, description, tags, price, image }) {
  const [contador, setContador] = useState(0);
  return (
    <div className="container">
      <img className = "image" src={image} alt="" />
      <div className="tag">
      <p className="tags">{tags}</p>
      </div>
     
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>

      <div className="IconsandPrice">
        <p className="price">
          <div className="RS">R$</div>
          {price}
        </p>

        <div className="contador">
          <button onClick={() => setContador(contador - 1)}>
            <Minus className="minus" size={10} color="#8047F8" />
          </button>
          <p>{contador}</p>
          <button onClick={() => setContador(contador + 1)}>
            <Plus className="plus" size={10} color="#8047F8" />
          </button>
        </div>

        <LucideShoppingCart className="shopCar" size={35} color="white" />
      </div>


    


    </div>
  );
}
