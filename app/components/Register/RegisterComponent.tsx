import AuthCardComponent from '../AuthCard/AuthCardComponent';
interface RegisterProps {
  isLogin?: boolean;
  setLogin?: (isLogin: boolean) => void;
}
export default function RegisterComponent(props: RegisterProps) {
  return (
    <AuthCardComponent isChange={props.isLogin ?? false}>
      <h1 onClick={() => props.setLogin?.(true)}>Register</h1>
    </AuthCardComponent>
  );
}
