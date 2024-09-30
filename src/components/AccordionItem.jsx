"use client";
import { useState } from "react";

export default function AccordionItem({ id, title, type, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderContent = ( type, content ) => {
    switch (type) {
      case "text":
        return <p className="px-4 py-2 text-gray-700">{content}</p>;
      case "list":
        return (
          <div className="mb-2 mt-2 flex flex-wrap gap-2">
            {content.map((item, index) => (
              <div key={index} className="rounded-lg bg-gray-200 px-4 py-2">
                {item}
              </div>
            ))}
          </div>
        );
      default:
        return <p className="px-4 py-2 text-gray-700">Unknown content type</p>;
    }
  };

  return (
    <div className="border-b border-gray-200" role="tab" id={id}>
      <button
        className="flex w-full items-center justify-between py-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
      >
        <h3 className="text-left text-lg font-medium text-gray-900">{title}</h3>
        <svg
          className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        id={`${id}-content`}
        className={`transition-max-height duration-500 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"} overflow-hidden`}
        role="tabpanel"
        aria-labelledby={id}
      >
        {renderContent(type, content)}
      </div>
    </div>
  );
}
