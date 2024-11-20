import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SchedulePage from "@/pages/schedule";

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
