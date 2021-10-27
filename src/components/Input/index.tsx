import { InputProps } from "../../types";
import "./styles.css";

const Input = ({ placeholder, label, ...rest }: InputProps) => {
  return (
    <div className="wrapper">
      {label && (
        <div className="wrapper-label">
          <label>{label}</label>
        </div>
      )}

      <div className="wrapper-input">
        <input placeholder={placeholder} {...rest} />
      </div>
    </div>
  );
};

export default Input;
