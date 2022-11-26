import React, { useState } from "react";
import {
  PencilSquareIcon,
  ChevronDownIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { chats } from "../data/dummy";
const Messages = () => {
  const messageSelected = true;
  const [chatSelected, setchatSelected] = useState(false);
  return (
    <div className="relative top-4 max-w-6xl border border-l-0 rounded-sm w-[750px] flex flex-row gap-2">
      <div className="max-w-sm w-96 flex border border-t-0">
        <div className="relative header w-full  ">
          <div className="flex items-center gap-2 justify-center border-b pb-2 p-2">
            <label className="text-xs font-semibold tracking-tight">
              username
            </label>
            <ChevronDownIcon className="minibar-icons cursor-pointer mt-1" />
          </div>
          <PencilSquareIcon className="h-5 w-5 absolute right-2 top-3" />
          {/* message ->div 2 */}
          <div className="flex flex-row p-2 gap-3 ">
            <button className="text-xs font-semibold tracking-tighter border-b">
              Messages
            </button>
            <button className="text-xs font-semibold tracking-tighter border-b">
              Generals
            </button>
          </div>
          {messageSelected ? (
            <div className="relative  max-h-[500px] h-[500px] overflow-y-auto w-full flex flex-col gap-2 ">
              {chats.map((message, index) => (
                <div
                  className="pl-2 pr-1 h-14 w-full flex flex-row items-center gap-2 cursor-pointer hover:bg-gray-50"
                  key={index}
                  onClick={() => {
                    setchatSelected(true);
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
                      <p className="text-xs text-gray-500 font-light">
                        {message.lastMessage}
                      </p>
                      <span className="text-[10px] text-gray-400">
                        {message.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>generals</div>
          )}
        </div>
      </div>

      {chatSelected ? (
        <div className="w-full bg-red-500">Selected</div>
      ) : (
        <div className="w-full  flex flex-col justify-center items-center gap-2">
          <PaperAirplaneIcon className="h-20 w-20 border rounded-full p-4 border-black -rotate-12" />
          <h4 className="font-light text-lg">Your Messages</h4>
          <p className="text-gray-400 text-xs">
            Send private photos and messages to a friend or group.
          </p>
          <button className="p-1 text-xs text-white rounded-sm bg-sky-500">
            send message
          </button>
        </div>
      )}
    </div>
  );
};

export default Messages;
