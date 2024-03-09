import React from "react";
import Carousal from "./Carousal";
import { Container, Typography} from "@mui/material";


function Banner() {
 return (
    <div style={{ backgroundImage: "url(./assests/banner2.jpg)" }}>
      <Container
        style={{
          height: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 25,
        }}
      >
        <div
          style={{
            display: "flex",
            height: "40%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "montserrat",
              textAlign: "center",
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
              textAlign: "center",
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
