import { Container, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import Carousal from "./Carousal";
const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./assests/banner2.jpg)",
  },
  container: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 25,
  },
  text: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.container}>
        <div className={classes.text}>
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "montserrat",
              textAlign:"center"
            }}
          >
            Crypto Project
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgray",
              textTransform: "capitalize",
              fontFamily: "montserrat",
              textAlign:"center"
            }}
          >
            Get all details about your favorite crypto currency.
          </Typography>
        </div>
        <Carousal />
      </Container>
    </div>
  );
}

export default Banner;
