import React from "react";
// Styles
import styles from "./footer.module.scss";
// Types
interface IFooter {
  name: string;
  tel: string;
}

const Footer: React.FC<IFooter> = ({ name, tel }) => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        {Object.entries({ name, tel }).map(([key, value], i) => (
          <li key={`item-${i + 1}`} className={styles.item}>
            <h3>{key === "name" ? "Выполнил" : "Телефон"}</h3>
            {key === "name" ? (
              <strong>{value}</strong>
            ) : (
              <a href={`tel:+${value.replace(/[0-9]/gi, "")}`}>{value}</a>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
