import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const WhatsAppModal = ({ waLink, onClose, showModal }) => {
  const qrCodeLink = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${waLink}`;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (showModal) {
      setVisible(true);
      setTimeout(() => {
        document.querySelector('.whatsapp-modal').classList.add('opacity-100');
      }, 10);
    } else {
      const modalElement = document.querySelector('.whatsapp-modal');
      if (modalElement) {
        modalElement.classList.remove('opacity-100');
        setTimeout(() => {
          setVisible(false);
        }, 300);
      }
    }
  }, [showModal]);

  return (
    visible && (
      <div className="whatsapp-modal fixed bottom-24 right-10 z-50 max-w-sm w-screen p-6 bg-pro-lightgray rounded-xl shadow-2xl border border-gray-300 opacity-0 transition-opacity duration-300">
        <button onClick={onClose} className="absolute top-2 right-4 text-xl font-semibold text-gray-500 hover:text-gray-700 transition duration-200">×</button>
        <div className="flex flex-col items-center">
          <div className="mb-4 text-center">
            <label className="block mb-2 text-lg font-medium text-gray-800">Scan to chat with us</label>
          </div>
          <div className="p-2 mb-4 bg-white border border-gray-300 rounded-lg shadow-md">
            <Image src={qrCodeLink} width={200} height={200} quality={100} priority={true} alt="WhatsApp QR Code"
                   className="rounded-lg" />
          </div>

          <div className="mb-4 w-full max-w-2xl text-center">
            <label className="block mb-2 mt-2 text-lg font-medium text-gray-800">Chat with us on
              Desktop</label>
            <button
              onClick={() => window.open(waLink, '_blank')}
              className="w-full py-3 mt-2 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 transition duration-200 shadow-md"
            >
              Open WhatsApp
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default WhatsAppModal;
