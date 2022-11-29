import { useState, useContext, createContext } from "react";
import { useRouter } from "next/router";
const UserContext = createContext({});

const AuthContext = ({ children }: any) => {
  const router = useRouter();

  const [tokenState, setTokenState] = useState("");

  const onLogout = () => {
    setTokenState("");
    localStorage.removeItem("token");
    router.push("login");
  };

  const onLogin = (token: string) => {
    setTokenState(token);
    console.log(token);
    localStorage.setItem("token", token);
    router.push("/dashboard");
  };

  return (
    <>
      <UserContext.Provider value={{ tokenState, setTokenState, onLogin }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default AuthContext;

export const useAuth = () => {
  const val = useContext(UserContext);
  return val;
};
