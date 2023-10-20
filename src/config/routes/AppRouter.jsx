import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AdminLayout from "../../components/layout/AdminLayout";
import Dashboard from "../../pages/admin/Dashboard";
import OperationLayout from "../../components/layout/OperationLayout";
import { emailSubsider } from "../constants/menus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/admin/dashboard" />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "analytics",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Dashboard />,
      },
      {
        path: "videos",
        element: <Dashboard />,
      },
      {
        path: "chats",
        element: <Dashboard />,
      },
      {
        path: "emails",
        element: (
          <OperationLayout title={"Emails"} sidebarOptions={emailSubsider} />
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "logs",
            element: <Dashboard />,
          },
          {
            path: "templates",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "settings",
        element: <Dashboard />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
