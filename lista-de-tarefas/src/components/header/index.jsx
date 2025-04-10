import "./styles.css";
import logo from "../../assets/Logo.png"

export function Header() {
  return (
    <header>
      <img src={logo} alt="" className="logo"/>
    </header>
    
  );
}
