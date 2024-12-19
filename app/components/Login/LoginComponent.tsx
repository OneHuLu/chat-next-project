import CardComponent from "../AuthCard/AuthCardComponent";
interface LoginProps {
  isLogin?: boolean;
}
export default function LoginComponent(props: LoginProps) {
  return (
    <CardComponent isChange={props.isLogin ?? false}>
      <h1>Login</h1>
    </CardComponent>
  );
}
