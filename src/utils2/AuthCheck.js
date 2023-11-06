import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCheck = (props) => {
  const navigate = useNavigate();
  let token = localStorage.getItem("access_token");
  //   let rememberMe = JSON.parse(localStorage.getItem("rememberMe"));
  useEffect(() => {
    if (token) {
      console.log(token);
      return navigate("/");
    }
  }, [navigate]);
  return props.children;
};
export default AuthCheck;
