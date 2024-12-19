import CardComponent from "../Card/CardComponent";
interface LoginProps {
  isLogin?: boolean;
}
export default function LoginComponent(props: LoginProps) {
  return <CardComponent title="LoginComponent" towCardCahnge={props.isLogin} />;
}
