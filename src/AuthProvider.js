// src/AuthProvider.js

import React, { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.init();
    setUser(netlifyIdentity.currentUser());
    netlifyIdentity.on("login", (user) => setUser(user));
    netlifyIdentity.on("logout", () => setUser(null));
  }, []);

  return (
    <AuthContext.Provider value={{ user, netlifyIdentity }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };