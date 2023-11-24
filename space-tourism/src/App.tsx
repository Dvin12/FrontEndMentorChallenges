import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navigation from "./components/Navigation";
import Error from "./pages/Error";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

export default function App(): JSX.Element {
  function Layout(): JSX.Element {
    return (
      <main>
        <Navigation />
        <Outlet />
      </main>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/destination",
          element: <Destination />,
        },
        {
          path: "/crew",
          element: <Crew />,
        },
        {
          path: "/technology",
          element: <Technology />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
