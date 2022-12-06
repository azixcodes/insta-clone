import React, { useEffect, useState } from "react";
const { faker } = require("@faker-js/faker");
const Stories = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
    }));
    setUsers(suggestions);
  }, []);

  return (
    <div
      className="border max-w-3xl w-[400px] h-28  scrollbar-thin 
     overflow-x-auto flex flex-row gap-5  items-center mt-3 rounded-md  bg-white p-3"
    >
      <div className="flex mx-3 gap-3">
        {users.map((item, index) => (
          <div className="flex flex-col text-center items-center" key={index}>
            <img
              src={item.avatar}
              className="h-16 w-16 rounded-full border-2 border-yellow-400"
              alt="avatar"
            />
            <p className="w-16 whitespace-nowrap text-xs text-ellipsis overflow-hidden">
              {item.username}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
