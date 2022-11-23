import React from "react";
import BackDrop from "@mui/material/Backdrop";
const UploadFile = ({ handleUploadFileClick, modalOpen }) => {
  return (
    <BackDrop
      onClick={() => {
        handleUploadFileClick();
      }}
      open={modalOpen}
    >
      <div className="h-96 w-96 z-50 bg-white">
        <h3>upload files here</h3>
      </div>
    </BackDrop>
  );
};

export default UploadFile;
