import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IDefaultProviderProps, ILoginFormValue, IRegisterFormValue, IUser, IUserContext } from "./@types";
import { api } from "../services/api";


export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const userAutoLogin = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const response = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        navigate("/shop");
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@TOKEN");
      }
    }
  };

  useEffect(() => {
    userAutoLogin();
  }, []);

  const userLogin = async (dataLogin: ILoginFormValue) => {
    try {
      const response = await api.post("/login", dataLogin);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      navigate("/shop")
    } catch (error) {
      console.log(error)
    }
  }
  const registerUser = async (dataRegister: IRegisterFormValue) => {
    try {
      await api.post("/users", dataRegister);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/")
  }

  return (
    <UserContext.Provider value={{ user, setUser, registerUser, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  )
}

