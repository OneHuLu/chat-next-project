import React from "react";
import styles from "./authCard.module.css";
interface AuthCardSlotProps {
  children: React.ReactNode;
  isChange: boolean;
}
export default function AuthCardComponent({
  children,
  isChange,
}: Readonly<AuthCardSlotProps>) {
  return (
    <div className={`${styles.card} ${isChange ? styles.show : styles.hide}`}>
      {children}
    </div>
  );
}
