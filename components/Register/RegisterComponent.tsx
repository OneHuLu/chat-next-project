import CardComponent from "../Card/CardComponent";
interface RegisterProps {
  isLogin?: boolean;
}
export default function RegisterComponent(props: RegisterProps) {
  return (
    <CardComponent title="RegisterComponent" towCardCahnge={props.isLogin} />
  );
}
