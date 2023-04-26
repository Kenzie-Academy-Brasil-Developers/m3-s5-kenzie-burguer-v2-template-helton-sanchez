import { createContext, useEffect, useState} from "react";
import { IDefaultProviderProps, IProducts, Product } from "./@types";
import { api } from "../services/api";


export const UserContext = createContext({} as Product)

export const UserProvider = ({ children }: IDefaultProviderProps) => {

  const [products, setProducts] = useState<Product | null>(null);
  
  const renderProducts = async () => {
    try {
      const response = await api.get("//products");
      setProducts(response.data);
      console.log(response.data);      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    renderProducts()
  },[])


 

  return (
    <UserContext.Provider value={{products, renderProducts }}>
      {children}
    </UserContext.Provider>
  )
}




