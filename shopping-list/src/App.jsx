import { Hearder } from "./components/hearder";
import { Form } from "./components/form";
import { Product } from "./components/product";
import shopppingList from "../data.json";
import { useState } from "react";
export function App() {
  const [productList, setProductList] = useState(
    shopppingList.lista_de_compras
  );

  function handleAddProduct(newProduct) {
    setProductList((prevList) => [...prevList, newProduct]);
  }

  /*   const [serach, setSearch] = useState("");
  const filteredList = shopppingList.lista_de_compras.filter(({ nome }) =>
    nome.toLowerCase().includes(serach.toLocaleLowerCase())
  );
 */

  return (
    <>
      <Hearder />
      <div className="container">
        <Form /* onSearch={setSearch} */ onAddProduct={handleAddProduct} />
        <div className="product-list">
          {productList.map(
            // desestruturação
            ({ nome, quantidade, tipo }, index) => (
              <Product
                key={index}
                productName={nome}
                quantity={quantidade}
                type={tipo}
              />
            )
          )}

          {/*   {filteredList.map(({ nome, quantidade, tipo }, index) => (
            <Product
              key={index}
              productName={nome}
              quantity={quantidade}
              type={tipo}
            />
          ))} */}
        </div>
      </div>
    </>
  );
}
