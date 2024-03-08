import {
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  makeStyles,
} from "@material-ui/core";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContextData } from "../cryptoContext/AuthContext";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#f70000",
    fontFamily: "montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

function Header() {
  const navigate = useNavigate();
  const classes = useStyles();
  const {currency,setCurrency} = useContext(AppContextData);
  const handleNavigate = () => {
    navigate("/");
  };
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={handleNavigate}
              className={classes.title}
              variant="h6"
            >
              Crypto Currency
            </Typography>
            <Select
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
    </ThemeProvider>
  );
}

export default Header;
