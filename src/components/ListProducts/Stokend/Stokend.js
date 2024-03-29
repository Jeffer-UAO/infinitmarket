import React from "react";
import { BASE_NAME } from "@/config/constants";

import { CardImg } from "reactstrap";

import styles from "./Stokend.module.scss";

export function Stokend(props) {
  const { product } = props;



  return (
    <div className={styles.list__product}>
      <div className={styles.soldout}>
        <span>AGOTADO</span>
      </div>
      {product.productData.images ? (       
          <CardImg
            alt="Card image cap"
            src={BASE_NAME + product.productData.images}
          />
      ) : (
                 <CardImg
            alt="Card image cap"
            src={product.productData.image_alterna}
          />       
      )}
      <h5>{product.productData.name_extend}</h5>    
    </div>
  );
}
