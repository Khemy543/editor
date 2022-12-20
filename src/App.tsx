import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//layouts
import DefaultLayout from "./layouts/default";

//pages
import HomePage from "./pages/HomePage";
import SelectDocumentType from "./pages/SelectDocumentType";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/create-document",
        element: <SelectDocumentType />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
