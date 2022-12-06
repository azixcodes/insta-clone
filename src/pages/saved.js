import React from "react";
import { useStateContext } from "../contexts/ContextApi";
const Saved = () => {
  const { setSavedItems, savedItems } = useStateContext();
  console.log(savedItems);
  return (
    <div className="asbolute px-2 w-auto h-screen ml-2 flex flex-col mt-3 ">
      <div className="w-full flex flex-row flex-wrap gap-4">
        {savedItems.map((item, index) => (
          <div className="w-72 max-w-3xl h-auto max-h-96" key={index}>
            <img src={item.post} className="h-full w-full" alt="post" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;
