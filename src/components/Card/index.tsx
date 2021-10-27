import { Person } from "../../types";
import "./styles.css";

const Card = ({ name, age, hobby }: Person) => {
  return (
    <div className="card">
      <div>{name}</div>
      <div>{age}</div>
      <div>{hobby}</div>
    </div>
  );
};

export default Card;
