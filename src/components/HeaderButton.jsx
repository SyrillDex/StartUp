import {
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const HeaderButton = ({
  navTo = "/",
  title = "Nothing",
  isWrapping = false,
}) => {
  return (
    <>
      {isWrapping ? (
        <Button
          component={Link}
          to={navTo}
          color="inherit"
          style={{
            fontFamily: "Quicksand",
            fontWeight: "600",
            letterSpacing: "2px",
            textAlign: "center",
            fontSize: "70%",
            textWrap: "nowrap",
          }}
        >
          {title}
        </Button>
      ) : (
        <Button
          component={Link}
          to={navTo}
          color="inherit"
          style={{
            fontFamily: "Quicksand",
            fontWeight: "600",
            letterSpacing: "2px",
            textAlign: "center",
            fontSize: "70%",
          }}
        >
          {title}
        </Button>
      )}
    </>
  );
};

export const HeaderDropDownButton = ({
  buttonTitle = "buttonTitle",
  menuObj,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="inherit"
        style={{
          fontFamily: "Quicksand",
          fontWeight: "600",
          letterSpacing: "2px",
          textAlign: "center",
          fontSize: "70%",
          textWrap: "nowrap",
        }}
        onClick={handleClick}
      >
        {buttonTitle}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {menuObj.map((value, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={value.link}
            onClick={handleClose}
          >
            {value.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
