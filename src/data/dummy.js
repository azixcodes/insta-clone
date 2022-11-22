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
import User from "./user.jpeg";
import php1 from "./php.jpg";
import Tailwind from "./tail.png";
import NextJs from "./nextjs1.jpg";

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

export const posts = [
  {
    post: [
      {
        username: "goswami rashoneie",
        profile: User,
        userPost: php1,
        caption: "Get started with PHP ): ",
        likes: 234,
        time: "8 hours ago",
        comments: [
          {
            user: "smith",
            image: User4,
            comment: "already on it...",
            timeStamp: "04 houres ago",
          },
        ],
      },
    ],
  },
  {
    post: [
      {
        username: "binnu",
        profile: User,
        userPost: NextJs,
        caption: "Next JS 13 is awesome for server side rendering ",
        likes: 928,
        time: "2 days ago",
        comments: [
          {
            user: "alexa",
            image: User3,
            comment: "yeah it's amazing..",
            timeStamp: "just now",
          },
          {
            user: "smith",
            image: User4,
            comment: "already on it...",
            timeStamp: "04 houres ago",
          },
          {
            user: "binnu",
            image: User5,
            comment: "get some help",
            timeStamp: "5 hours ago",
          },
        ],
      },
    ],
  },
  //post 3
  {
    post: [
      {
        username: "aziz",
        profile: User,
        userPost: Tailwind,
        caption:
          "How to build an amazing dashboard with Tailwindcss, follow the link below ",
        likes: 1522,
        time: "2 hours ago",
        comments: [
          {
            user: "alexa",
            image: User3,
            comment: "yeah it's amazing..",
            timeStamp: "just now",
          },
          {
            user: "smith",
            image: User4,
            comment: "already on it...",
            timeStamp: "04 houres ago",
          },
          {
            user: "binnu",
            image: User5,
            comment: "get some help",
            timeStamp: "5 hours ago",
          },
        ],
      },
    ],
  },
];
