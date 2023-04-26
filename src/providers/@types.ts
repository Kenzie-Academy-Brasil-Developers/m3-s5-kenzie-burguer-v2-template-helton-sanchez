export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  "id": string
  "name": string,
  "email": string,

}

export interface IRegisterFormValue {
  "name": string,
  "email": string,
  "password": string,
  "confirmationPassword": string,
}

export interface ILoginFormValue {
  "email": string,
  "password": string,
}

export interface IProducts {
  "id": number,
  "name": string,
  "category": string,
  "price": number,
  "img": string,
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  registerUser: (dataRegister: IRegisterFormValue) => Promise<void>;
  userLogin: (dataLogin: ILoginFormValue) => Promise<void>;
  userLogout: () => void;
}

export interface IProductsContext {
  product: Product | null;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  registerUser: (dataRegister: IRegisterFormValue) => Promise<void>;
  userLogin: (dataLogin: ILoginFormValue) => Promise<void>;
  userLogout: () => void;
}


export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}