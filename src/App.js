import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import MainRouter from "./routers/MainRouter";
import Header from "./components/Header";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color:"white",
    minHeight:'100vh'
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header />
      <MainRouter />
    </div>
  );
}

export default App;
