import React, { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";
import { navigate } from "gatsby";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState('Unknown');

  useEffect(() => {
    netlifyIdentity.init();

    const currentUser = netlifyIdentity.currentUser();
    if (currentUser) {
      setUser(currentUser);
      setFullName(currentUser.user_metadata.full_name);
    }

    netlifyIdentity.on("login", (user) => {
      setUser(user);
      setFullName(user.user_metadata.full_name);
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
