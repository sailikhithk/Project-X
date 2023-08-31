import UserManagementPageLayout from "../pages/UserManagementPageLayout";

import Dashboard from "../components/Dashboard";
import TeacherInfo from "../components/TeacherInfo";
import StudentInfo from "../components/StudentInfo";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

const appRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />,
    },
  },
  {
    path: "/user",
    element: <UserManagementPageLayout />,
    state: "user",
    sidebarProps: {
      displayText: "User Management",
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        path: "/user/teacher",
        element: <TeacherInfo />,
        state: "user.teacher",
        sidebarProps: {
          displayText: "Teacher",
        },
      },
      {
        path: "/user/student",
        element: <StudentInfo />,
        state: "user.student",
        sidebarProps: {
          displayText: "Student",
        },
      },
    ],
  },
];

export default appRoutes;
