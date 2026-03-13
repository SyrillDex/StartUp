import { Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HeaderButton, HeaderDropDownButton } from "./HeaderButton";

const Header = () => {
  const aboutUsMenu = [
    {
      title: "Caffeine Chronicles",
      link: "/about",
    },
    {
      title: "Meet the Baristas",
      link: "/about#baristas",
    },
    {
      title: "Our Coffee Culture",
      link: "/about#culture",
    },
  ];

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "0% 15%",
          textWrap: "hidden",
        }}
      >
        <Box
          style={{
            width: "50%",
            display: "flex",
            gap: "10%",
            justifyContent: "center",
          }}
        >
          <HeaderButton navTo="/" title="Brewing Today" isWrapping={true} />
          <HeaderDropDownButton
            buttonTitle="Behind the Beans"
            menuObj={aboutUsMenu}
          />
        </Box>
        <Box className="logo-div" style={{ width: "100%" }}>
          <img
            className="main-logo"
            src="./images/Logo.jpg"
            alt="Start up logo"
          />
        </Box>
        <Box
          style={{
            width: "35%",
            display: "flex",
            justifyContent: "center",
            gap: "15%",
          }}
          sx={{
            px: 3,
          }}
        >
          <HeaderButton navTo="/gallery" title="Coffee Moments" />
          <HeaderButton navTo="#find-us" title="Drop By" isWrapping={true} />
          <HeaderButton
            navTo="#contact-us"
            title="Contact Us"
            isWrapping={true}
          />
        </Box>
        <Box
          style={{
            width: "15%",
            display: "flex",
            justifyContent: "center",
          }}
          sx={{
            px: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              "&:hover": { backgroundColor: "#5A3D2B" },
              color: "white",
              borderRadius: "12px",
              px: 2,
              py: 1,
              fontFamily: "Fredoka",
              fontWeight: "500",
              letterSpacing: "1.5px",
              textWrap: "nowrap",
            }}
          >
            Start Now!
          </Button>
        </Box>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
