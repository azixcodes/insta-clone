import React from "react";

const Inbox = ({ selectedMessage }) => {
  return (
    <div className="mx-2 mt-3 w-full">
      {selectedMessage.messages.map((message, index) => (
        <div
          key={index}
          className="rounded-sm  text-xs flex w-full flex-col-reverse"
        >
          <div className="relative flex flex-col gap-2 mr-2 top-12 w-auto items-end pr-2">
            {message.sent.map((item, i) => (
              <div className="flex-wrap rounded-md p-2 bg-gray-200 " key={i}>
                <p>{item.message}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 p-2 w-full">
            <img
              src={selectedMessage.image}
              className="rounded-full h-7 w-7"
              alt={selectedMessage.username}
            />
            <div className="flex flex-col gap-1 w-auto">
              {message.recieved.map((chat, i) => (
                <div key={i} className="border rounded-md p-2 gap-2">
                  {chat.message}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inbox;
