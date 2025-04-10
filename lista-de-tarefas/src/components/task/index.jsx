import "./styles.css";
import { Trash2 } from "lucide-react";

export function Tasks({ id, descricao }) {
  return (
    <div className="container">
      <div className="task">
        <input type="checkbox" />
        <p>
          {descricao}
        </p>
        <Trash2 size={24} color="#6B6572"/>
      </div>
    </div>
  );
}
export function NumbersTasks() {
  return (
    <div className="criadas-concluidas">
      <div className="tarefas-criadas">
        <p>Tarefas criadas</p>
        <span>16</span>
      </div>
      <div className="concluidas">
        <p>Concluidas</p>
        <span>8</span>
      </div>
    </div>
  );
}
