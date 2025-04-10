import { Header } from "./components/header";
import { Tasks } from "./components/task";
import { NumbersTasks } from "./components/task";
import { AddTask } from "./components/add-task/";
import listaTarefas from "../data.json";
import { Key } from "lucide-react";

export function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AddTask />
        <NumbersTasks />
        <div className="tasks-list">
          {listaTarefas.lista_de_tarefas.map(({ descricao }, index) => (
            <Tasks Key={index} descricao={descricao} />
          ))}
        </div>
      </div>
    </>
  );
}
