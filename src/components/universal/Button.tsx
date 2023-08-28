import styles from "./Button.module.scss";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}
function Button({ children }: ButtonProps) {
  return <button className={styles.btn}>{children}</button>;
}

export default Button;
