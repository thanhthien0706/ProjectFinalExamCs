import { CSSProperties, HTMLAttributes } from "react";

export interface IBaseComponent<T> extends HTMLAttributes<T> {
  children?: any;
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
}

export interface IBaseSVGComponent {
  fill?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export interface Option {
  value: string;
  label: string;
}

export interface OptionValAny {
  value: any;
  label: any;
}
