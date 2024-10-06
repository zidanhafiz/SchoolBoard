import {
  BookOpen,
  Building,
  Calendar,
  CircleCheckBig,
  CircleUserRound,
  ClipboardList,
  GraduationCap,
  House,
  IdCard,
  ListTodo,
  LogOut,
  Megaphone,
  MessageCircle,
  NotebookPen,
  Settings,
  UserCheck,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <House size={20} strokeWidth={1.5} />,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <GraduationCap size={20} strokeWidth={1.5} />,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <IdCard size={20} strokeWidth={1.5} />,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <UsersRound size={20} strokeWidth={1.5} />,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: <ListTodo size={20} strokeWidth={1.5} />,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <Building size={20} strokeWidth={1.5} />,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <BookOpen size={20} strokeWidth={1.5} />,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <NotebookPen size={20} strokeWidth={1.5} />,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <ClipboardList size={20} strokeWidth={1.5} />,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <CircleCheckBig size={20} strokeWidth={1.5} />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <UserCheck size={20} strokeWidth={1.5} />,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <Calendar size={20} strokeWidth={1.5} />,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MessageCircle size={20} strokeWidth={1.5} />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <Megaphone size={20} strokeWidth={1.5} />,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <CircleUserRound size={20} strokeWidth={1.5} />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <Settings size={20} strokeWidth={1.5} />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <LogOut size={20} strokeWidth={1.5} />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-8 text-sm">
      {menuItems.map((group) => (
        <div key={group.title} className="mb-4">
          <h4 className="text-sm text-gray-400 font-light hidden lg:block mb-3">
            {group.title}
          </h4>
          {group.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center gap-2 text-sm text-gray-500 py-2 px-2 my-1 justify-center lg:justify-start transition hover:bg-primary hover:text-primary-foreground rounded-md"
            >
              {item.icon}
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
