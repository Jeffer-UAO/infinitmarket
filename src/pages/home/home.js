import React, { useEffect, useState } from "react";
import { Categories } from "@/api/category";
import { ListCategories, Footer, FooterApp, Redes } from "@/components";

import { BasicLayout } from "../../layouts";

const categoriesCtrl = new Categories();


export default function HomePage() {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await categoriesCtrl.getAll();
        setCategories(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await productsCtrl.getProductByOfertAndExclusive();
  //       setProducts(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);

  if (categories !== null) {
    return (
      <>
        <BasicLayout>
          {/* <Redes /> */}
          <ListCategories categories={categories} />

          {/* <Promotion products={products} />
          <hr />
          <Exclusive products={products} /> */}

          <FooterApp />
          <Footer />
        </BasicLayout>
      </>
    );
  } else {
    return (
      <>
        <BasicLayout>
         <p>Cargando...</p>
          <FooterApp />
          <Footer />
        </BasicLayout>
      </>
    );
  }
}
