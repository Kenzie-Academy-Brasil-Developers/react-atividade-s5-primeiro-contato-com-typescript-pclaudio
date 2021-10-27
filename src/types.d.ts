import { InputHTMLAttributes } from "react";

export interface Person {
  name: string;
  age: number;
  hobby: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
