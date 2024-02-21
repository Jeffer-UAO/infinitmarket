import { BASE_API } from "../config/constants";

const data = [
  {
    comments: "Comentarios del elemento del pedido 1",
    price: 75000.0,
    qty: 1,
    item: "0225",   
  },
  {
    comments: "Comentarios del elemento del pedido 1",
    price: 45250.0,
    qty: 1,
    item: "0226",   
  },
  {
    comments: "Comentarios del elemento del pedido 1",
    price: 85000.0,
    qty: 1,
    item: "0227",   
  },
];

export class Orders {
  async addOrdersApi(dataT) {
    try {
      const url = `${BASE_API}/api/ordere/create_order/`; // Endpoint para crear un pedido

      const orderData = {
        cust: 1,
        tipo: "PEDIDO EXTERNO",
        concept: "Venta de productos",
        orderdetData: data,     
      };

      const params = {
        method: "POST",
        headers: {
          //   Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Especifica el tipo de contenido como JSON
        },
        body: JSON.stringify(orderData),
      };

      const response = await fetch(url, params); // Realiza la solicitud POST

      if (!response.ok) {
        throw new Error("Error al crear el pedido"); // Lanza un error si la solicitud no fue exitosa
      }

      const result = await response.json(); 
      return result; 
      
    } catch (error) {
      console.error("Error en la solicitud:", error); 
      throw error; 
    }
  }
}
