import AuthCardComponent from "../AuthCard/AuthCardComponent";
interface LoginProps {
  isLogin?: boolean;
}
export default function LoginComponent(props: LoginProps) {
  return (
    <AuthCardComponent isChange={props.isLogin ?? false}>
      <h1>Login</h1>
    </AuthCardComponent>
  );
}
