import { createContext, useContext, useState } from "react";

interface AuthContextType {
  authUser: User | null;
  setAuthUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  authUser: null,
  setAuthUser: () => {},
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: any) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(`${localStorage.getItem("user")}`) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
