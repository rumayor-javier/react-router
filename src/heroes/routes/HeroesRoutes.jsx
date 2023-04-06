import { Outlet, Navigate } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../pages";

export const heroesChildRoutes = [
  {
    path: "/",
    element: <Navigate to={"/marvel"} />,
  },
  {
    path: "marvel",
    element: <MarvelPage />,
  },
  {
    path: "dc",
    element: <DcPage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "hero/:heroId",
    element: <HeroPage />,
  },
];

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
