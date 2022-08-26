import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement>{
  icon?: IconType;
  isError?: boolean;
  isDirty?: boolean;
}