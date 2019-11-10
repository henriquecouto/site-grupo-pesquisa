import React, { useState, useEffect } from "react";

import {
  createMuiTheme,
  ThemeProvider,
  makeStyles
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BtnMenu from "./components/BtnMenu";
import Header from "./components/Header";

const Home = ({ handleMenuActive }) => {
  useEffect(() => {
    handleMenuActive();
  }, []);

  return "Home";
};

const theme = createMuiTheme({
  palette: {
    primary: { main: "#fff" },
    background: { main: "#212121", secondary: "#263238" }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    overflow: "hidden"
  }
}));

function App() {
  const classes = useStyles();
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActive = () => {
    setMenuActive(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <BtnMenu active={menuActive} handle={handleMenuActive} />

          <Header active={menuActive} handle={handleMenuActive} />

          <div style={{ width: "100%", color: "#fff" }}>
            <Route
              exact
              path="/"
              render={() => <Home handleMenuActive={handleMenuActive} />}
            />

            <Route
              exact
              path="/1"
              render={() => <Home handleMenuActive={handleMenuActive} />}
            />

            <Route
              exact
              path="/2"
              render={() => <Home handleMenuActive={handleMenuActive} />}
            />

            <Route
              exact
              path="/3"
              render={() => <Home handleMenuActive={handleMenuActive} />}
            />

            <Route
              exact
              path="/4"
              render={() => <Home handleMenuActive={handleMenuActive} />}
            />

            <Route
              exact
              path="/5"
              render={() => <Home handleMenuActive={handleMenuActive} />}
            />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
