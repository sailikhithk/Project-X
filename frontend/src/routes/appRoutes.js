import UserManagement from "../pages/UserManagement";
import DeepAnalysis from "../pages/DeepAnalysis";

import Dashboard from "../components/Dashboard";
import Summary from "../components/Summary";
import AddTeachers from "../components/AddTeachers";
import Teachers from "../components/Teachers";
import AddStudents from "../components/AddStudents";
import Students from "../components/Students";
import EmotionSensing from "../components/EmotionSensing";

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
    path: "/deep-analysis",
    element: <DeepAnalysis />,
    state: "deepAnalysis",
    sidebarProps: {
      displayText: "Deep Analysis",
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        path: "/deep-analysis/emotion-sensing",
        element: <EmotionSensing />,
        state: "deepAnalysis.emotionSensing",
        sidebarProps: {
          displayText: "Emotion Sensing",
        },
      },
    ],
  },
  {
    path: "/user",
    element: <UserManagement />,
    state: "user",
    sidebarProps: {
      displayText: "User Management",
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        path: "/user/summary",
        element: <Summary />,
        state: "user.summary",
        sidebarProps: {
          displayText: "Summary",
        },
      },
      {
        path: "/user/add-teacher",
        element: <AddTeachers />,
        state: "user.addTeacher",
      },
      {
        path: "/user/teachers",
        element: <Teachers />,
        state: "user.teachers",
        sidebarProps: {
          displayText: "View Teachers",
        },
      },
      {
        path: "/user/add-student",
        element: <AddStudents />,
        state: "user.addTeacher",
      },
      {
        path: "/user/students",
        element: <Students />,
        state: "user.students",
        sidebarProps: {
          displayText: "View Students",
        },
      },
    ],
  },
];

export default appRoutes;
