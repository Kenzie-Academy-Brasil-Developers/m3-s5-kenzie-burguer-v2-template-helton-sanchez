import { createContext, useEffect, useState} from "react";
import { IDefaultProviderProps, IProducts, IProductsContext} from "./@types";
import { api } from "../services/api";


export const UserContextCart = createContext({} as IProductsContext)

export const UserProvider = ({ children }: IDefaultProviderProps) => {

  const [product, setProducts] = useState<IProducts | null>(null);
  
  const renderProducts = async () => {
    try {
      const response = await api.get("/products");
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
    <UserContextCart.Provider value={{product, renderProducts }}>
      {children}
    </UserContextCart.Provider>
  )
}




