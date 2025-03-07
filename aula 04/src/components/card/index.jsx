import "./style.css";
import { Button } from "../button";
import { ItemList } from "../item-list";

export function Card({
  description,
  title,
  price,
  darkMode = false,
  enterprise = false,
  features,
}) {
  return (
    <div className="col-md-4">
      <div className={`container ${darkMode ? "darkContainer" : ""}`}>
        <div
          style={darkMode ? {} : { display: "none" }}
          className="maisVantajoso"
        >
          <p className="textvantajoso">MAIS VANTAJOSO</p>
        </div>

        <p id="description">{description}</p>

        <div className="titlePrice">
          <h1>{title}</h1>
          <strong
            className="priceTag"
            style={enterprise ? { display: "none" } : {}}
          >
            <span>R$</span>
            {price}
            <span>/mês</span>
          </strong>
        </div>

        <Button
          title={enterprise ? "Fale com a gente" : "Assinar agora"}
          className={`${darkMode ? "darkButton" : ""}`}
        />

        <hr />

        <div className="listaUltimateGeral">
          <ul className="listaUltimate">
            {features &&
              features.map((item, index) => (
                <ItemList
                  className={`${darkMode ? "darkMode" : ""}`}
                  key={index}
                  functionality={item}
                  enterprise={enterprise}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
