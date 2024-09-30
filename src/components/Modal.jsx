import React from "react";

export default function Modal({ show, onClose, title, message }) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="relative h-full w-full max-w-2xl p-4 md:h-auto">
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
        <div className="relative rounded-lg bg-white shadow">
          <div className="flex items-center justify-between rounded-t border-b p-5">
            <h3
              id="modal-title"
              className="text-xl font-semibold text-gray-900"
            >
              {title}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="ml-auto inline-flex transform items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 hover:text-gray-900"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5">
                <use xlinkHref="/assets/icons/icon-close.svg#icon-close"></use>
              </svg>
            </button>
          </div>
          <div className="space-y-6 p-6">
            <p id="modal-description" className="text-base leading-relaxed text-gray-500">
              {message}
            </p>
          </div>
          <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6">
            <button
              onClick={onClose}
              className="transform rounded-lg bg-pro-green px-5 py-2.5 text-center text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-pro-orange focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
