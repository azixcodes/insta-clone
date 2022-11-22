import {
  HomeIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { AiOutlineCompass } from "react-icons/ai";
import User1 from "./user1.jpg";
import User2 from "./user2.jpg";
import User3 from "./user3.jpg";
import User4 from "./user4.jpg";
import User5 from "./user5.jpg";

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

export const stories = [
  {
    username: "goswami rashoneie",
    image: User2,
  },
  {
    username: "binnu",
    image: User1,
  },
  {
    username: "alexa",
    image: User3,
  },
  {
    username: "smith",
    image: User4,
  },
  {
    username: "justin",
    image: User5,
  },
];
