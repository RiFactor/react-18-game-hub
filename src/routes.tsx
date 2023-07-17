import { createBrowserRouter } from "react-router-dom";
import Layout from "./assets/pages/Layout";
import GameDetailPage from "./assets/pages/GameDetailPage";
import HomePage from "./assets/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
