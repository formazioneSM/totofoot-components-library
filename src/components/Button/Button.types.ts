import { MouseEventHandler } from "react";
export interface ButtonProps{
    text?: string;
  primary?: boolean;
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}