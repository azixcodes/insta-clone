import {
  HomeIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  HeartIcon,
  BookmarkIcon,
  Cog6ToothIcon,
  ShieldExclamationIcon,
  ClockIcon,
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
    path: "/",
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
    icon: <PaperAirplaneIcon style={{ rotate: "-30deg" }} />,
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

export const tags = [
  "About",
  "Help",
  "Press",
  "Jobs",
  "Privacy",
  "Terms",
  "Locations",
  "Language",
];

export const minibar = [
  {
    label: "Settings",
    icon: <Cog6ToothIcon />,
  },
  {
    label: "Saved",
    icon: <BookmarkIcon />,
  },
  {
    label: "Your Activity",
    icon: <ClockIcon />,
  },
  {
    label: "Report a Problem",
    icon: <ShieldExclamationIcon />,
  },
];

export const chats = [
  {
    username: "goswami rashoneie",
    image: User2,
    lastMessage: "you get it",
    time: "2w",
    messages: [
      {
        recieved: [
          {
            message: "Hey there?",
          },
        ],
        sent: [
          {
            message: "Hello",
          },
        ],
      },
    ],
  },
  {
    username: "binnu",
    image: User1,
    lastMessage: "I found that thing superb.",
    time: "1w",
    messages: [
      {
        recieved: [
          {
            message: "uncaught error at JSON 0, seriously?",
          },
        ],
        sent: [
          {
            message:
              "Check your encode method. may be something not right there ",
          },
        ],
      },
    ],
  },
  {
    username: "alexa",
    image: User3,
    lastMessage: "sorry",
    time: "3w",
    messages: [
      {
        recieved: [
          {
            message: "check this out https:www.github.com/heroicons-react",
          },
        ],
        sent: [
          {
            message: "I am using this, ):",
          },
        ],
      },
    ],
  },
  {
    username: "smith",
    image: User4,
    lastMessage: "hey there",
    time: "2d",
    messages: [
      {
        recieved: [
          {
            message: "are you there, give me a reply when you get this",
          },
          {
            message: "i want some help regarding react-routers",
          },
        ],
        sent: [
          {
            message: "Refer to official docs of react-router-dom",
          },
          {
            message: "It's always good to refer to the official docs.",
          },
        ],
      },
    ],
  },
  {
    username: "justin",
    image: User5,
    lastMessage: "xabardat",
    time: "4h",
    messages: [
      {
        recieved: [
          {
            message: "Greetings !",
          },
        ],
        sent: [
          {
            message: "Hello",
          },
        ],
      },
    ],
  },
];
