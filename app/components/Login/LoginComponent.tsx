import { Button, Input } from 'antd';
import AuthCardComponent from '../AuthCard/AuthCardComponent';
import styles from './login.module.scss';
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
        <div className={styles.flex_row_space}>
          <Input placeholder="请输入验证码" size="large" />
          <Button size="large" className={styles.btn}>
            获取验证码
          </Button>
        </div>
        <div className={styles.flex_row_space}>
          <span onClick={() => props.setLogin?.(false)} className={styles.text}>
            注册
          </span>
          <span className={styles.text}>忘记密码</span>
        </div>
      </div>
    </AuthCardComponent>
  );
}
