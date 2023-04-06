import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import { LoginPage } from "../auth";
import { HeroesRoutes, heroesChildRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute, PublicRoute } from "./index";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HeroesRoutes />
      </PrivateRoute>
    ),
    children: heroesChildRoutes,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
