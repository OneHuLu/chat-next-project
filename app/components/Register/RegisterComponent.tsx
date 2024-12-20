import AuthCardComponent from "../AuthCard/AuthCardComponent";
interface RegisterProps {
  isLogin?: boolean;
}
export default function RegisterComponent(props: RegisterProps) {
  return (
    <AuthCardComponent isChange={props.isLogin ?? false}>
      <h1>Register</h1>
    </AuthCardComponent>
  );
}
