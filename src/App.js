import "./App.css";

import MainRouter from "./routers/MainRouter";
import Header from "./components/Header";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#14161a",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Header />
      <MainRouter />
    </div>
  );
}

export default App;
