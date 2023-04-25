import React, { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";
import { navigate } from "gatsby";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const fullName = user?.user_metadata?.full_name || 'Unknown';

  useEffect(() => {
    netlifyIdentity.init();

    // Check if a user is already authenticated
    const user = netlifyIdentity.currentUser();
    if (user) {
      setUser(user);
    }

    netlifyIdentity.on("login", (user) => setUser(user));
    netlifyIdentity.on("logout", () => setUser(null));
  }, []);

  return (
    <AuthContext.Provider value={{ user, netlifyIdentity, fullName }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
