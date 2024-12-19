import { useState } from "react";
import RegisterComponent from "../Register/RegisterComponent";
import LoginComponent from "../Login/LoginComponent";
import styles from "./auth.module.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.container} onClick={() => setIsLogin(!isLogin)}>
      <LoginComponent isLogin={isLogin} />
      <RegisterComponent isLogin={!isLogin} />
    </div>
  );
}
