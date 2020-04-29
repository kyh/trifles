import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider as AlertProvider, transitions, positions } from "react-alert";

import { ReactAlertTemplate } from "components";
import { lightTheme, darkTheme } from "styles/theme";
import { GlobalStyle } from "styles/global";

import { usePlayhouse } from "features/home/playhouseSlice";
import { Home } from "features/home/Home";
import { GameMasterRoutes } from "features/gamemaster/GameMasterRoutes";
import { GameRoutes } from "features/game/GameRoutes";
import { SignupPage } from "features/auth/Signup";
import { LoginPage } from "features/auth/Login";
import { Profile } from "features/profile/Profile";

const alertOptions = {
  position: positions.TOP_CENTER,
  transition: transitions.SCALE,
  timeout: 8000,
};

export const App: React.FC = () => {
  const { state } = usePlayhouse();
  return (
    <ThemeProvider theme={state.isDarkMode ? darkTheme : lightTheme}>
      <AlertProvider template={ReactAlertTemplate} {...alertOptions}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game/:gameId">
            <GameRoutes />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/gamemaster">
            <GameMasterRoutes />
          </Route>
          <Route path="/:username">
            <Suspense fallback="Loading...">
              <Profile />
            </Suspense>
          </Route>
          <Redirect to="/" />
        </Switch>
      </AlertProvider>
    </ThemeProvider>
  );
};
