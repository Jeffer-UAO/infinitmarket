import { useState } from "react";
import { Orders } from "@/api/orders";

export function useOrder() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  


  const addOrders = async (dataOrder) => {  
      try {
      setLoading(true);
      const orders = new Orders(); // Crear una instancia de la clase Orders
      const response = await orders.addOrdersApi(dataOrder); // Enviamos los datos para ser ag     
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
