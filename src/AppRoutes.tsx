import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Main 
const Main = lazy(() => import("./main/pages/Main"));
const MainHome = lazy(() => import("./main/pages/Home"));
const Quotes = lazy(() => import("./main/pages/Quotes"));

// Core
const Forbidden = lazy(() => import("./core/pages/Forbidden"));
const NotFound = lazy(() => import("./core/pages/NotFound"));
const UnderConstructions = lazy(
  () => import("./core/pages/UnderConstructions")
);

// Landing
const Landing = lazy(() => import("./landing/pages/Landing"));

// Users

const AppRoutes = () => {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<Landing />} />
      <Route path="main" element={<Main />}>
          <Route path="/" element={<MainHome />} />
          <Route path="quotes" element={<Quotes />} />
      </Route>
      <Route path="under-construction" element={<UnderConstructions />} />
      <Route path="403" element={<Forbidden />} />
      <Route path="404" element={<NotFound />} />
      <Route
        path="*"
        element={<Navigate to={`/${process.env.PUBLIC_URL}/404`} replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
