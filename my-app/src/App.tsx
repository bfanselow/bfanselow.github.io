import React, { FC, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import Endurance from "./pages/Endurance";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Photos from "./pages/Photos";
import Software from "./pages/Software";

const App: FC = () => {
  return (
      <Fragment>
          <CssBaseline />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Navbar />}>
                      <Route index element={<Home />} />
                      <Route path="endurance" element={<Endurance />} />
                      <Route path="software" element={<Software />} />
                      <Route path="photos" element={<Photos />} />
                      <Route path="*" element={<NotFound />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </Fragment>
  );
}

export default App;
