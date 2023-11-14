import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import Switcher from "./Switcher";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Burger() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { pathname } = useLocation();

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const active = localStorage.getItem("i18nextLng");

  const list = (anchor) => (
    <div className="h-[100%] lg:hidden">
      <div className="flex justify-center items-center gap-[60px] my-10">
        <ul className="xs:flex xs:gap-[8px] xl:absolute xl:right-[136px]">
          <li
            className="text-[16px] font-medium cursor-pointer"
            style={{ color: active == "en" ? "green" : "gray" }}
            onClick={() => changeLanguage("en")}
          >
            EN
          </li>
          <li
            className="text-[16px] font-medium cursor-pointer"
            style={{ color: active == "ru" ? "green" : "gray" }}
            onClick={() => changeLanguage("ru")}
          >
            RU
          </li>
        </ul>
        <div>
          <Switcher />
        </div>
      </div>
      <Box
        sx={{
          padding: "10px",
          width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ul className="flex flex-col gap-[20px] text-black font-medium">
            <NavLink to="/">
              <li
                style={{
                  textDecoration: pathname == "/" ? "underline" : "none",
                }}
                className="cursor-pointer"
              >
                Home
              </li>
            </NavLink>
            <NavLink to="contact">
              <li
                style={{
                  textDecoration: pathname == "/contact" ? "underline" : "none",
                }}
                className="cursor-pointer"
              >
                Contact
              </li>
            </NavLink>
            <NavLink to="about">
              <li
                style={{
                  textDecoration: pathname == "/about" ? "underline" : "none",
                }}
                className="cursor-pointer"
              >
                About
              </li>
            </NavLink>
            <NavLink to="signup">
              <li
                style={{
                  textDecoration: pathname == "/signup" ? "underline" : "none",
                }}
                className="cursor-pointer"
              >
                Sign Up
              </li>
            </NavLink>
          </ul>
          <div>
            <p>Categories</p>
          </div>
        </List>
      </Box>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <IconButton>
              <MenuIcon>{anchor}</MenuIcon>
            </IconButton>
          </Button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
