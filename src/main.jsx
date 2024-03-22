import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import CharacterDetail from "./routes/characterDetail.jsx";
import CharacterLocation from "./routes/characterLocation.jsx";
import CharacterLocationDetail from "./routes/characterLocationDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/characters/:id",
    element: <CharacterDetail />,
  },
  {
    path: "/locations",
    element: <CharacterLocation />,
  },
  {
    path: "/locations/:locationId",
    element: <CharacterLocationDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
