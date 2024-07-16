import { FC, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

const App: FC = () => {
  return (
      <Fragment>
          <CssBaseline />
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route element={<NotFound />} />
              </Routes>
          </BrowserRouter>
      </Fragment>
  );
}

export default App;
