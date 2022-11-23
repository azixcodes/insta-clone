import React, { useState } from "react";
import { Button, Modal } from "flowbite-react/lib/cjs/components/";
const Messages = () => {
  const [open, setopen] = useState(false);

  const handleClick = () => {
    setopen(!open);
  };
  return (
    <React.Fragment>
      <Button onClick={handleClick}>Toggle modal</Button>
      <Modal show={open} size="3xl" popup={true}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleClick}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={handleClick}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Messages;
