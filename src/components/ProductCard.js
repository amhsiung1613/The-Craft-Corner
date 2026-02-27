
import styles from "../css/CheckoutSuccess.module.css";

export const ProductCard = (props) => {
  const { id, name, price, image } = props.data;

  return (
    <div className={styles["ProductCard"]}>
      <img src={image} alt={name} className={styles["card-img"]} />
      <h3 className={styles["card-title"]}>{name}</h3>
      <div className={styles["description"]}>
        <p> Price: ${price}</p>
      </div>
    </div>
  );
};
