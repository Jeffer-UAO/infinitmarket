import { BASE_API } from "../config/constants";

export class Orders {
  async addOrdersApi(data, follow) {

    try {
      const url = `${BASE_API}/api/ordere/create_order/`; // Endpoint para crear un pedido

      const orderData = {
        cust: 1,
        tipo: 'PEDIDO EXTERNO',
        concept: follow,
        orderdetData: data.orderdetData,
      };
      console.log(orderData);

      const params = {
        method: "POST",
        headers: {
        //   Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Especifica el tipo de contenido como JSON
        },
        body: JSON.stringify(orderData), // Convierte los datos del pedido a formato JSON
      };

      const response = await fetch(url, params); // Realiza la solicitud POST

      if (!response.ok) {
        throw new Error("Error al crear el pedido"); // Lanza un error si la solicitud no fue exitosa
      }

      const result = await response.json(); // Convierte la respuesta a formato JSON
      return result; // Devuelve el resultado
    } catch (error) {
      console.error("Error en la solicitud:", error); // Maneja cualquier error que ocurra durante la solicitud
      throw error; // Relanza el error para que el llamador pueda manejarlo
    }
  }
}
