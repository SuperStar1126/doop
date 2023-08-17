import { createContext, ReactNode, useState } from "react";

// export type AuthContextDataProps = {
//   user: boolean;
//   signIn: () => void;
// };

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(false);

  function signIn() {
    // console.log(user);
    setUser(true);
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
