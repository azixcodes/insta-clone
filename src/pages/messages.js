import React, { useState } from "react";
import {
  PencilSquareIcon,
  ChevronDownIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  VideoCameraIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { chats } from "../data/dummy";
import Inbox from "../components/Inbox";

const Messages = () => {
  const [messageSelected, setmessageSelected] = useState(true);
  const [chatSelected, setchatSelected] = useState(false);
  const [selectedMessage, setselectedMessage] = useState([]);
  const handleClickMessage = (message) => {
    setselectedMessage(message);
    setchatSelected(true);
  };
  const handleClickGeneral = () => {
    setmessageSelected(false);
    setchatSelected(false);
  };
  return (
    <div className="relative top-4 max-w-6xl border border-l-0 rounded-sm w-[750px] flex flex-row gap-0">
      <div className="max-w-sm w-96 flex border border-t-0">
        <div className="relative header w-full  ">
          <div className="flex items-center gap-2 justify-center border-b h-10">
            <label className="text-xs font-semibold tracking-tight">
              aziz-codes
            </label>
            <ChevronDownIcon className="h-4 w-4 cursor-pointer mt-1" />
          </div>
          <PencilSquareIcon className="h-5 w-5 absolute right-2 top-2" />
          {/* message ->div 2 */}
          <div className="flex flex-row p-2 gap-3 border-b">
            <button
              className={`text-xs font-semibold tracking-tighter ${
                messageSelected ? "text-black" : "text-gray-400"
              }`}
              onClick={() => {
                setmessageSelected(true);
              }}
            >
              Messages
            </button>
            <button
              className={`text-xs font-semibold tracking-tighter ${
                messageSelected ? "text-gray-400" : "text-black"
              }`}
              onClick={handleClickGeneral}
            >
              Generals
            </button>
          </div>
          <div
            className={`relative top-[-1px]  h-[0.5px] w-12 bg-black ${
              !messageSelected ? "left-[66px]" : "left-[7px]"
            }`}
          ></div>

          {messageSelected ? (
            <div className="relative  max-h-[500px] h-[500px] overflow-y-auto w-full flex flex-col gap-2 ">
              {chats.map((message, index) => (
                <div
                  className="pl-2 pr-1 h-14 w-full flex flex-row items-center gap-2 cursor-pointer hover:bg-gray-50"
                  key={index}
                  onClick={() => {
                    handleClickMessage(message);
                  }}
                >
                  <img
                    src={message.image}
                    alt={message.username}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col w-full">
                    <p className="text-xs font-semibold tracking-tight">
                      {message.username}
                    </p>
                    <div className="flex flex-row gap-3">
                      <div className="text-xs text-gray-400 ">
                        {message.messages.map((item, i) => {
                          return (
                            <p
                              key={i}
                              className="whitespace-nowrap overflow-hidden text-ellipsis  w-32"
                            >
                              {item.recieved[0].message}
                            </p>
                          );
                        })}
                      </div>
                      <span className="text-[10px] text-gray-400">
                        {message.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-h-[500px] h-[500px] overflow-y-auto w-full flex flex-col gap-2">
              <label className="m-3">No Message Requests</label>
            </div>
          )}
        </div>
      </div>

      {chatSelected ? (
        <div className="w-full flex flex-col">
          <div className="flex w-full flex-row justify-between  items-center p-2 border-b">
            <div className="flex gap-1 items-center ml-6">
              <img
                src={selectedMessage.image}
                alt="user"
                className="h-6 w-6 rounded-full"
              />
              <p className="first-letter:capitalize text-xs font-semibold">
                {selectedMessage.username}
              </p>
            </div>
            <div className="flex gap-3 mr-6">
              <PhoneIcon className="minibar-icons cursor-pointer" />
              <VideoCameraIcon className="minibar-icons cursor-pointer" />
              <ExclamationCircleIcon className="minibar-icons cursor-pointer" />
            </div>
          </div>

          <div className="w-full">
            <Inbox selectedMessage={selectedMessage} />
          </div>
        </div>
      ) : (
        <div className="w-full  flex flex-col justify-center items-center gap-2">
          <PaperAirplaneIcon className="h-20 w-20 border-[1.5px] rounded-full p-4 border-black -rotate-12 font-extralight" />
          <h4 className="font-light text-lg">
            {messageSelected ? "Your Messages" : "Your General Messages"}
          </h4>
          <p className="text-gray-400 text-xs">
            {messageSelected
              ? "    Send private photos and messages to a friend or group."
              : "Notifications are off for messages you move here, but you can turn them on anytime."}
          </p>
          <button className="relative p-2 text-xs text-white rounded-md bg-insta top-4">
            {messageSelected ? "send message" : "Go to Notification Settings"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Messages;
