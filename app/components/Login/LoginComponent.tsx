import { Button, Input } from "antd";
import AuthCardComponent from "../AuthCard/AuthCardComponent";
interface LoginProps {
  isLogin?: boolean;
  setLogin?: (isLogin: boolean) => void;
}
export default function LoginComponent(props: LoginProps) {
  return (
    <AuthCardComponent isChange={props.isLogin ?? false}>
      <h1>Login</h1>
      <Input placeholder="请输入邮箱" />
      <Input placeholder="请输入密码" />
      <div>
        <Input placeholder="请输入验证码" />
        <Button>获取验证码</Button>
      </div>
      <div>
        尚未注册，前往
        <span onClick={() => props.setLogin?.(false)}>
          <i>注册</i>
        </span>
      </div>
    </AuthCardComponent>
  );
}
