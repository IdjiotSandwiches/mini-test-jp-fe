import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SchedulePage from "@/pages/staff/index";
import ViewPage from "@/pages/staff/view";
import InsertPage from "@/pages/staff/insert";
import UpdatePage from "./pages/staff/update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SchedulePage />,
    },
    {
      path: "/view/:id",
      element: <ViewPage />,
    },
    {
      path: "/insert",
      element: <InsertPage />
    },
    {
      path: "/update",
      element: <UpdatePage />
    }
  ]);

  return (
    <>
      <div className="min-h-screen max-w-screen-lg mx-auto pt-60">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
