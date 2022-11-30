import React from "react";

const Notifications = () => {
  const d = new Date();
  const givenDate = "Thu Dec 01 2022";
  let newDate = d - givenDate;

  return <div>date is {newDate.toString()}</div>;
};

export default Notifications;
