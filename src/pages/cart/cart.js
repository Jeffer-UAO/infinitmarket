import React, { useEffect, useState } from "react";
import { useCart } from "@/hooks/useCart";
import { Products } from "@/api/products";
import {
  Footer,
  FooterCart,
  ListCart,
  NotFound,
  Redes,
  Separator,
} from "@/components";
import { BasicLayout } from "@/layouts";
import { size } from "lodash";
import { BASE_NAME } from "@/config/constants";

const productCtrl = new Products();

export default function CartPage() {

  const { cart } = useCart("");
  const [product, setProduct] = useState("");
  const [load, setLoad] = useState(true);
  const hasProduct = size(product) > 0;

  const [newProduct, setNewProduct] = useState("");
  const [follow, setFollow] = useState("");
  const [newOrder, setNewOrder] = useState([{ item: "", qtyorder: "", qty: "", price: ""}]);

  const identificadorUnico = generarIdentificadorUnico();
  
  // const datosPedido = {
  //   cust: 1,
  //   tipo: 'PEDIDO INTERNO', 
  //   concept: 'Concepto del pedido',
  //   orderdetData: [
  //     {       
  //       comments: "",
  //       price: 1500.00,
  //       qty: 2,
  //       qtyorder: 1,
  //       item: '0225',       
  //     },
  //     {       
  //       comments: "",
  //       price: 3500.00,
  //       qty: 2,
  //       qtyorder: 1,
  //       item: '0224',     
  //     },
  //     {   
  //       comments: "",
  //       price: 1500.00,
  //       qty: 2,
  //       qtyorder: 1,
  //       item: '0226',    
  //     },
  //     {      
  //       comments: "",
  //       price: 2500.00,
  //       qty: 1,
  //       qtyorder: 1,
  //       item: '0227',     
  //     },      
  //   ],
  // };

 
  useEffect(() => {
    (async () => {
      try {
        const data = [];
        for await (const item of cart) {
          const response = await productCtrl.getProductById(item.id);
          data.push({ ...response, quantity: item.quantity });
        }
        setProduct(data);
        setLoad(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart]);

  useEffect(() => {
    (async () => {
      try {
        const newObjectArray = [];
        const orderArray = [];

        for (const record of product) {
          const newRecord = {};

          for (const key in record) {
            if (
              Object.hasOwnProperty.call(record, key) &&
              [
                "name_extend",
                "quantity",
                "codigo",
                "images",
                "price1",
                "image_alterna",
                "ref",
              ].includes(key)
            ) {
              newRecord[key] = record[key];
            }
          }

          if (newRecord.images) {
            newObjectArray.push({
              Producto: newRecord.name_extend,
              Referencia: newRecord.ref,
              Cantidad: newRecord.quantity,
              Imagen: BASE_NAME + newRecord.images,
            });
            orderArray.push({
              price: newRecord.price1,
              item: newRecord.codigo,
              qty: newRecord.quantity,
              qty_order: newRecord.quantity,
            });
          } else {
            newObjectArray.push({
              Producto: newRecord.name_extend,
              Referencia: newRecord.ref,
              Cantidad: newRecord.quantity,
              Imagen: newRecord.image_alterna,
            });
            orderArray.push({
              price: newRecord.price1,
              item: newRecord.codigo,
              qty: newRecord.quantity,
              qty_order: newRecord.quantity,
            });
          }
        }
        const newArrayAsString = JSON.stringify(newObjectArray, null, 2);
        setNewProduct(`Pedido No.  ${identificadorUnico} ${newArrayAsString}`);
        setFollow(identificadorUnico);
        setNewOrder(orderArray);
        
      } catch (error) {
        console.error(error);
      }
    })();
  }, [product]);

  return (
    <BasicLayout>
         {load ? (
        <h1>Cargando ...</h1>
      ) : (
        <>
          {hasProduct ? (
            <ListCart product={product}  />
          ) : (
            <NotFound
              title={"Uppss... en este momento no hay productos en el Carrito"}
            />
          )}
        </>
      )}
      <FooterCart product={newProduct} order={newOrder} follow={follow}  />
    </BasicLayout>
  );
}

function generarIdentificadorUnico() {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";

  let identificador = "";

  const letraAleatoria = letras[Math.floor(Math.random() * letras.length)];
  identificador += letraAleatoria;

  for (let i = 0; i < 4; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 10);
    identificador += numeros[numeroAleatorio];
  }

  return identificador;
}
