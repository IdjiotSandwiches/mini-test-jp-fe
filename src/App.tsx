import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SchedulePage from "@/pages/staff/index";
import UpdatePage from "@/pages/staff/update";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SchedulePage />
    },
    {
      path: '/update',
      element: <UpdatePage />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
