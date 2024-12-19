import styles from "./card.module.css";
interface CardProps {
  title: string;
  content?: string;
  imageUrl?: string;
  towCardCahnge?: boolean;
}
export default function CardComponent(props: CardProps) {
  return (
    <div
      className={`${styles.card} ${
        props.towCardCahnge ? styles.show : styles.hide
      }`}
    >
      <div>{props.title}</div>
    </div>
  );
}
