import React, { useContext, useEffect } from "react";
import { navigate } from "gatsby";
import AuthContext from "../AuthProvider";
import AuthenticatedTimeline from "../components/AuthenticatedTimeline"; // Import the AuthenticatedTimeline component

const TimeLine = () => {
  const auth = useContext(AuthContext);
  const user = typeof window !== "undefined" ? auth.user : null;

  useEffect(() => {
    if (!user && typeof window !== "undefined") {
      navigate("/login");
    }
  }, [user]);

  return user ? <AuthenticatedTimeline /> : null;
};

export default TimeLine;
