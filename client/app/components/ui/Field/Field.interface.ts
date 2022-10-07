import { InputHTMLAttributes } from "react";

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement>{
  field: {
    name: any;
    legend: string;
    description?: string;
  }
}