import { configureStore } from "@reduxjs/toolkit";
import onlineShop from "../reducers/onlineShop.jsx";

export const store = configureStore({
  reducer: {
    onlineShop: onlineShop,
  },
});
