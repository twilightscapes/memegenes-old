import React, { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState('Unknown');

  useEffect(() => {
    netlifyIdentity.init();
    setUser(netlifyIdentity.currentUser());
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      setFullName(user?.user_metadata?.full_name || 'Unknown');
    });
    netlifyIdentity.on("logout", () => {
      setUser(null);
      setFullName('Unknown');
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, netlifyIdentity, fullName }}>
      {children}
    </AuthContext.Provider>
  );
};


export { AuthContext, AuthProvider };
