import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import "../style.css";

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  const handleGenerateClick = () => {
    alert(
      "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
    );
  };

  const handleInsertClick = () => {
    // Logic to insert text into the message input field
  };

  return (
    <>
      {/* <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Open Modal
      </button> */}

      <div
        className={`modal ${isOpen ? "block" : "hidden"} `}
        onClick={handleOutsideClick}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Type your message here..."
          />
          <div className="p-2 flex">
            <button onClick={handleGenerateClick} className="bg-gray-400">
              Generate
            </button>
            <button className="regenerate-button border-0" disabled>
              Regenerate
            </button>
            <button onClick={handleInsertClick} className="insert-button">
              Insert
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
