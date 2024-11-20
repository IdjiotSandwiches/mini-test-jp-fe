import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SchedulePage from "@/pages/staff";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SchedulePage />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
