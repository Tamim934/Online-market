// import jwt_decode from "jwt-decode";

export function saveToken(access_token) {
  localStorage.setItem("access_token", access_token);
}

function getToken() {
  try {
    return jwt_decode(localStorage.getItem("access_token"));
  } catch (error) {}
}

// function destroyToken() {
//   localStorage.removeItem("access_token");
//   localStorage.removeItem("rememberMe");
//   window.location.pathname = "/";
// }

// export { saveToken, destroyToken, getToken };
