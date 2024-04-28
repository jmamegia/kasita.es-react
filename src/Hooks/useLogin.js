import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { login } from "../Services/services";

export const useLogin = () => {
  const { setToken, setLocked } = useContext(AppContext);
  const getLogin = async (credentials) => {
    let result = await login(credentials);
    if (result) {
      setToken(result);
      setLocked(false);
    }
  };
  return { getLogin, setLocked };
};
