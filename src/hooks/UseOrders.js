import { useState } from "react";
import { Orders } from "@/api/orders";

export function useOrder() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  


  const addOrders = async (dataOrder, follow) => {
    
    try {
      setLoading(true);
      const orders = new Orders(); // Crear una instancia de la clase Orders
      const result = await orders.addOrdersApi(dataOrder, follow); // Enviamos los datos para ser ag
      console.log('Pedido creado exitosamente:', result); // Manejar el resultado del pedido exitoso
      setLoading(false);
    //   setOrders([...orders, response.data]);
      return response;
    } catch (error) {
      setError(error);
      console.error('Error al crear el pedido:', error);
    }
  };

  
  return {
    loading,
    error,
    addOrders, 
  };
}
