import "./styles.css";
import { CirclePlus } from "lucide-react";

export function AddTask() {
  return (
    <div className="container">
      <div className="input-icon">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className="input-adicionar"
        />
        <button type="button" className="button-add">
          <CirclePlus />
        </button>
      </div>
    </div>
  );
}
