import UserManagement from "../pages/UserManagement";
import DeepAnalysis from "../pages/DeepAnalysis";
import Account from "../pages/Account";

import Dashboard from "../components/Dashboard";
import Summary from "../components/Summary";
import AddTeachers from "../components/AddTeachers";
import Teachers from "../components/Teachers";
import AddStudents from "../components/AddStudents";
import Students from "../components/Students";
import BehavioralAnalysis from "../components/BehavioralAnalysis";
import KSAnalysis from "../components/KSAnalysis";
import PracticalThinkingA from "../components/PracticalThinkingA";
import EmotionSensing from "../components/EmotionSensing";
import HardSkillSoftSkills from "../components/HardSkillSoftSkills";
import Overview from "../components/Overview";
import Settings from "../components/Settings";

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
        path: "/deep-analysis/behavioral-analysis",
        element: <BehavioralAnalysis />,
        state: "deepAnalysis.behavioralAnalysis",
        sidebarProps: {
          displayText: "Behavioral Analysis",
        },
      },
      {
        path: "/deep-analysis/ks-analysis",
        element: <KSAnalysis />,
        state: "deepAnalysis.ksAnalysis",
        sidebarProps: {
          displayText: "KS Analysis",
        },
      },
      {
        path: "/deep-analysis/practical-thinking-a",
        element: <PracticalThinkingA />,
        state: "deepAnalysis.practicalThinkingA",
        sidebarProps: {
          displayText: "Practical thinking A",
        },
      },
      {
        path: "/deep-analysis/emotion-sensing",
        element: <EmotionSensing />,
        state: "deepAnalysis.emotionSensing",
        sidebarProps: {
          displayText: "Emotion Sensing",
        },
      },
      {
        path: "/deep-analysis/hard-skill-soft-skills",
        element: <HardSkillSoftSkills />,
        state: "deepAnalysis.hardSkillSoftSkills",
        sidebarProps: {
          displayText: "Hard Skill vs Soft skills",
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
  {
    path: "/account",
    element: <Account />,
    state: "account",
    sidebarProps: {
      displayText: "Account",
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        path: "/account/overview",
        element: <Overview />,
        state: "account.overview",
        sidebarProps: {
          displayText: "Overview",
        },
      },
      {
        path: "/account/settings",
        element: <Settings />,
        state: "account.settings",
        sidebarProps: {
          displayText: "Settings",
        },
      },
    ],
  },
];

export default appRoutes;
