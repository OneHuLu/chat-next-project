import { Button, Input } from 'antd';
import AuthCardComponent from '../AuthCard/AuthCardComponent';
interface LoginProps {
  isLogin?: boolean;
  setLogin?: (isLogin: boolean) => void;
}
export default function LoginComponent(props: LoginProps) {
  const flex_row_space = 'w-full flex flex-row item-center justify-between';
  const text = 'cursor-pointer text-[18px] text-gray-500 hover:text-hoverColor';
  const login = 'flex h-full w-full flex-col items-center justify-around';
  return (
    <AuthCardComponent isChange={props.isLogin ?? false}>
      <h1 className="text-4xl font-bold">登录</h1>
      <div className={login}>
        <Input placeholder="请输入邮箱" size="large" />
        <Input placeholder="请输入密码" size="large" />
        <div className={flex_row_space}>
          <Input placeholder="请输入验证码" size="large" />
          <Button size="large" className="ml-8">
            获取验证码
          </Button>
        </div>
        <div className={flex_row_space}>
          <span onClick={() => props.setLogin?.(false)} className={text}>
            注册
          </span>
          <span className={text}>忘记密码</span>
        </div>
      </div>
    </AuthCardComponent>
  );
}
