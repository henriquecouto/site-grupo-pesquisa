import React, { useState, useEffect } from "react";

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
import Content from "./components/Content";

import { loadScreens } from "./services/firebase/db";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#212121" },
    secondary: { main: "#263238" },
    text: { primary: "#e0e0e0" },
    error: { main: "#b71c1c" }
  }
});

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [screens, setScreens] = useState([]);

  useEffect(() => {
    const unsubscribe = loadScreens(setScreens);
    return () => unsubscribe();
  }, []);

  const handleMenuActive = () => {
    setMenuActive(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <BtnMenu active={menuActive} handle={handleMenuActive} />
        <Header active={menuActive} handle={handleMenuActive} />
        {!!screens.length && (
          <Content active={menuActive}>
            <Route
              exact
              path="/"
              render={() => (
                <Home handleMenuActive={handleMenuActive} screen={screens[0]} />
              )}
            />

            <Route
              exact
              path="/noticias"
              render={() => (
                <News handleMenuActive={handleMenuActive} screen={screens[1]} />
              )}
            />

            <Route
              exact
              path="/integrantes"
              render={() => (
                <Members
                  handleMenuActive={handleMenuActive}
                  screen={screens[2]}
                />
              )}
            />

            <Route
              exact
              path="/projetos"
              render={() => (
                <Projects
                  handleMenuActive={handleMenuActive}
                  screen={screens[3]}
                />
              )}
            />

            <Route
              exact
              path="/linhas-pesquisa"
              render={() => (
                <ResearchLines
                  handleMenuActive={handleMenuActive}
                  screen={screens[4]}
                />
              )}
            />

            <Route
              exact
              path="/contato"
              render={() => (
                <Contact
                  handleMenuActive={handleMenuActive}
                  screen={screens[5]}
                />
              )}
            />
          </Content>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
