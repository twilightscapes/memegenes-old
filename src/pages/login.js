import React, { useEffect, useContext } from "react";
import { navigate } from "gatsby";
import { AuthContext } from "../AuthProvider";
import netlifyIdentity from "netlify-identity-widget";
import Layout from "../components/siteLayout";

const LoginPage = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleLogin = () => {
    netlifyIdentity.open("login");
  };

  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Login</h1>
        <p>Please login to access the timeline.</p>
        <button onClick={handleLogin}>Login with Netlify Identity</button>
      </div>
    </Layout>
  );
};

export default LoginPage;
