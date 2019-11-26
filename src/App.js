import React, { useState } from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BtnMenu from "./components/BtnMenu";
import Header from "./components/Header";
import Home from "./screens/Home";
import News from "./screens/News";
import Members from "./screens/Members";
import ResearchLines from "./screens/ResearchLines";
import Contact from "./screens/Contact";
import Projects from "./screens/Projects";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#fff" },
    background: { main: "#212121", secondary: "#263238" }
  }
});

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActive = () => {
    setMenuActive(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
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
            path="/noticias"
            render={() => <News handleMenuActive={handleMenuActive} />}
          />

          <Route
            exact
            path="/integrantes"
            render={() => <Members handleMenuActive={handleMenuActive} />}
          />

          <Route
            exact
            path="/projetos"
            render={() => <Projects handleMenuActive={handleMenuActive} />}
          />

          <Route
            exact
            path="/linhas-pesquisa"
            render={() => <ResearchLines handleMenuActive={handleMenuActive} />}
          />

          <Route
            exact
            path="/contato"
            render={() => <Contact handleMenuActive={handleMenuActive} />}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
