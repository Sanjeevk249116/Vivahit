import {
  AppBar,
  Container,
  MenuItem,
  Select,

  Toolbar,
  Typography,
 
  
} from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContextData } from "../cryptoContext/AuthContext";



function Header() {
  const navigate = useNavigate();
 
  const {currency,setCurrency} = useContext(AppContextData);
  const handleNavigate = () => {
    navigate("/");
  };
 
  return (
    <div style={{color:"white"}}>

      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={handleNavigate}
              style={{
                flex: 1,
                color: "#f70000",
                fontFamily: "montserrat",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              variant="h6"
            >
              Crypto Currency
            </Typography>
            <Select
            sx={{color:'white',border:"1px solid white"}}
              variant="outlined"
              style={{ width: 100, height: 40, marginRight: 15 }}
              value={currency}
              onChange={(e)=>setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>

    </div>
  );
}

export default Header;
