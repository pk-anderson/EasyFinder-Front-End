import React, { createContext, useState } from 'react';

type AuthContextType = {
  token: string | null;
  userEmail: string | null;
  setToken: (token: string | null) => void;
  setUserEmail: (email: string | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  userEmail: null,
  setToken: () => {},
  setUserEmail: () => {},
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ token, userEmail, setToken, setUserEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
