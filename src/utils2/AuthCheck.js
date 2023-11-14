import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCheck = (props) => {
  const navigate = useNavigate();
  let token = localStorage.getItem("access_token");
  //   let rememberMe = JSON.parse(localStorage.getItem("rememberMe"));
  useEffect(() => {
    if (token) {
<<<<<<< HEAD
=======
      console.log(token);
>>>>>>> 5acc7f17bce63067daf2890e62511e057e743df3
      return navigate("/");
    }
  }, [navigate]);
  return props.children;
};
export default AuthCheck;
