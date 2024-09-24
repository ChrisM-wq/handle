import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import RootLayout from "./layout/RootLayout/RootLayout";
// Pages to be rendered in application
import Dashboard from "./pages/Dashboard/Dashboard";
import Tasks from "./pages/Tasks/Tasks";
import Kanban from "./pages/Kanban/Kanban";
import Account from "./pages/Account/Account";
import Task from "./pages/Task/Task";

const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <Landing /> },
        { path: "/login", element: <Login /> },
        { path: "/app", 
          element: <RootLayout />,
          children: [
            { index: true, element: <Dashboard />},
            { path: 'tasks', element: <Tasks />},
            { path: 'kanban', element: <Kanban />},
            { path: 'account', element: <Account />},
            { path: 'task', element: <Task />},
          ]
        }
      ],
    },
  ]);

export default router;