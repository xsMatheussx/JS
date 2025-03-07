import "./style.css";
import { Check, Info } from "lucide-react";

export function ItemList({ functionality, enterprise, className }) {
  return (
    <li>
      <div className={className}>
        <Check className="check" size={20} color="#04D361" />
        {functionality}
        {!enterprise && <Info className="info" size={20} color="#64748B" />}
      </div>
    </li>
  );
}
