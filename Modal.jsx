import React from "react";

const Modal = ({ children, isOpen, onClose, title, hideHeader }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-30 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative flex flex-col bg-white border-4 border-lime-500 shadow-2xl rounded-2xl max-w-md w-[90vw] max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        {!hideHeader && (
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="text-gray-400 hover:text-gray-700 hover:bg-orange-100 rounded-lg p-1.5 absolute top-3 right-3"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 h-[80vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
