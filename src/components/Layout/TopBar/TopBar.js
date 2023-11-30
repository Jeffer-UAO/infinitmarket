import styles from "./TopBar.module.scss";
import { CardImg } from "reactstrap";
import Link from "next/link";

export function TopBar() {
  return (
    <div className={styles.topbar_component}>
      <div className={styles.topBar}>
        <Link href="/">
          <CardImg src="/image/logo.jpeg" alt="No hay logo" />{" "}
        </Link>
        <h1>INFINITY MARKET</h1>
      </div>
      <div className={styles.title}>
        <h6>DESPACHOS A TODA COLOMBIA</h6>
        <p>Cel: 321 654 0641</p>
      </div>
    </div>
  );
}
