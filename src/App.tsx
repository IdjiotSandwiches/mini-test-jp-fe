import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SchedulePage from "@/pages/staff/index";
import UpdatePage from "@/pages/staff/update";
import ViewPage from "@/pages/staff/view";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SchedulePage />,
    },
    {
      path: "/update",
      element: <UpdatePage />,
    },
    {
      path: "/view",
      element: <ViewPage />,
    },
  ]);

  return (
    <>
      <div className="min-h-screen max-w-screen-lg mx-auto flex items-center">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
