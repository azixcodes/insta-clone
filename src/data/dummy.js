import {
  HomeIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { AiOutlineCompass } from "react-icons/ai";

export const links = [
  {
    label: "Home",
    path: "/home",
    icon: <HomeIcon />,
  },
  {
    label: "Search",
    path: "/search",
    icon: <MagnifyingGlassIcon />,
  },
  {
    label: "Messages",
    path: "/messages",
    icon: <PaperAirplaneIcon />,
  },
  {
    label: "Explore",
    path: "/explore",
    icon: <AiOutlineCompass style={{ height: "20px", width: "20px" }} />,
  },
  {
    label: "Notifications",
    path: "/notifications",
    icon: <HeartIcon />,
  },
];
