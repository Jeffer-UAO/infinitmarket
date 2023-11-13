import React from "react";
import { BASE_NAME } from "@/config/constants";
import Link from "next/link";

import { CardImg } from "reactstrap";

import styles from "./SoldOut.module.scss";

export function SoldOut(props) {
  const { product } = props;

  const format = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Cambia 'es-ES' por tu configuración regional
  };

  return (
    <div className={styles.list__product}>
      <div className={styles.soldout}>
        <span>AGOTADO</span>
      </div>
      {product.productData.images ? (
        <Link href={`/${product.productData.slug}`}>
          <CardImg
            alt="Card image cap"
            src={BASE_NAME + product.productData.images}
          />
        </Link>
      ) : (
        <Link href={`/${product.productData.slug}`}>
          <CardImg
            alt="Card image cap"
            src={product.productData.image_alterna}
          />
        </Link>
      )}

      <h5>{product.productData.name_extend}</h5>
      <div className={styles.product}></div>
    </div>
  );
}
