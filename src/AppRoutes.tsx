import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Landing
const Landing = lazy(() => import("./landing/pages/Landing"));

// Users

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Landing />} />
        <Route
          path="*"
          element={<Navigate to={`/${process.env.PUBLIC_URL}/404`} replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
