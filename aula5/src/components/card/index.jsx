import "./style.css";

export function Card({ title, description, price, image }) {
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <img src={image} alt="" />
      <p className="description">{description}</p>
      <p className="price">${price}</p>
      
    </div>
  );
}
