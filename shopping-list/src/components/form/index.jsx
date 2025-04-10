import "./styles.css";
import { Plus } from "lucide-react";
import { useState } from "react";

export function Form({ onAddProduct }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [tipo, setTipo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (nome.trim() === "") return;
    onAddProduct({
      nome,
      quantidade,
      tipo,
    });

    setNome("");
    setQuantidade(1);
    setTipo("un");
  }

  /*  const [input, setInput] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  } */

  return (
    <form onSubmit={handleSubmit}>
      <div className="item-input">
        <label htmlFor="name">Item</label>
        <input
          type="text"
          className="item"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="item-input">
        <label htmlFor="quantity">Quantidade</label>
        <div className="quantity-input-container">
          <input
            type="number"
            className="quantity-input"
            min={1}
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
          />
          <select
            className="unit-select"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="un.">Un.</option>
            <option value="L">L</option>
            <option value="Kg">Kg</option>
          </select>
        </div>
      </div>

      <div className="item-input">
        <label htmlFor="category">Categoria</label>
      </div>

      <button type="submit">
        <Plus size={24} />
      </button>
    </form>
  );
}
