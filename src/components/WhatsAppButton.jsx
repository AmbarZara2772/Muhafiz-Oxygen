"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import icon from "/public/logo/whatsapp-logo.png";
import WhatsAppModal from "@/components/WhatsappModal";

export default function WhatsAppButton() {
  const [showModal, setShowModal] = useState(false);

  const phoneNumber = "+923009494790";
  const waLink = `https://wa.me/${phoneNumber}`;

  const toggleModal = () => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.location.href = waLink;
    } else {
      setShowModal(prevShowModal => !prevShowModal);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showModal && !event.target.closest('.whatsapp-modal') && !event.target.closest('.whatsapp-button')) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showModal]);

  return (
    <>
      <button
        onClick={toggleModal}
        className="whatsapp-button fixed bottom-10 right-10 z-50 h-16 w-16 transform cursor-pointer flex justify-center items-center rounded-full bg-green-500 shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:opacity-90 hover:shadow-2xl"
        aria-label="Chat with us on WhatsApp"
      >
        <Image
          title="WhatsApp Us"
          alt="WhatsApp"
          src={icon}
          className="pointer-events-none"
        />
      </button>
      {showModal && (
        <WhatsAppModal phoneNumber={phoneNumber} waLink={waLink} onClose={toggleModal} showModal={showModal} />
      )}
    </>
  );
}