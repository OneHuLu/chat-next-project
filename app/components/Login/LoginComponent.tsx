import { Button, Input } from "antd";
import AuthCardComponent from "../AuthCard/AuthCardComponent";
import styles from "./login.module.scss";
interface LoginProps {
  isLogin?: boolean;
  setLogin?: (isLogin: boolean) => void;
}
export default function LoginComponent(props: LoginProps) {
  return (
    <AuthCardComponent isChange={props.isLogin ?? false}>
      <div className={styles.login}>
        <h1>Login</h1>
        <Input placeholder="请输入邮箱" size="large" />
        <Input placeholder="请输入密码" size="large" />
        <div className={styles.get_code}>
          <Input placeholder="请输入验证码" size="large" />
          <Button size="large" className={styles.btn}>获取验证码</Button>
        </div>
        <div>
          尚未注册，前往
          <span onClick={() => props.setLogin?.(false)}>
            <i>注册</i>
          </span>
        </div>
      </div>
    </AuthCardComponent>
  );
}
