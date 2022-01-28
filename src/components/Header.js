import React from "react";
import "../App.css";
//import logo from '../images/letter-m(1).png';
import logo from "../images/Logov2(2).jpeg";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "30%",
  maxHeight: "100%",
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  width: "100%",
  color: theme.palette.text.secondary,
}));

const Header = () => {
  return (
    <div>
      {/* <Grid container> */}
      <Grid item xs={12}>
        <Img style={{"height":"80vh", "width":"50vh"}} src={logo}></Img>
      </Grid>
      {/* <Grid container  xs={12} justifyContent="space-evenly" direction="row" alignItems="center"> */}
      <div className="center-navbar">
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" href="/michalCakes/#/Home">
                <button type="button" className="btn btn-primary btn-lg">
                  Gallery
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/michalCakes/#/BuyPage">
                <button type="button" className="btn btn-primary btn-lg">
                  Shop
                </button>
              </a>
            </li>
          </ul>
        </Grid>
      </div>
    </div>
  );
};

export default Header;
