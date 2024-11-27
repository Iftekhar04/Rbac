import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import UserPage from "./components/UserPage";
import RolePage from "./components/RolePage";
import PermissionPage from "./components/PermissionPage";


function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children:[
        {
          path:"/",
          element: <UserPage/>
        },
        {
          path: "role",
          element: <RolePage/>
        },
        {
          path: "permission",
          element: <PermissionPage/>
        }
      ]
    },
  ]);

  return (
    <>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
        
      </div>
    </>
  );
}

export default App;
