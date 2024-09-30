"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import { BRAND_NAME } from "@/utils/constants";

export default function ContactUsForm() {
  const maxLength = 250;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "" });

  const handleCloseModal = () => {
    setShowModal(false);

    setTimeout(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    }, 500);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
      phone: phoneNumber,
      subject: `Thank You for Contacting ${BRAND_NAME}!`,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      const message = responseData.success
        ? "Thank you for reaching out. Your form has been successfully submitted. You can expect a response from our support team within the next 24 hours."
        : "We encountered an error while sending your message. Please try again later or contact us directly.";

      setModalContent({
        title: responseData.success
          ? "Submission Successful"
          : "Submission Failed",
        message: message,
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setModalContent({
        title: "Submission Failed",
        message:
          "We encountered an error while sending your message. Please try again later or contact us directly.",
      });
      setShowModal(true);
    } finally {
      setShowModal(true);
    }
  };

  return (
    <div className="rounded-3xl bg-pro-green p-6 lg:w-1/3">
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        title={modalContent.title}
        message={modalContent.message}
      />
      <h2 className="mb-4 text-2xl font-bold text-pro-lightgray">
        Get in Touch
      </h2>
      <p className="mb-4 text-sm text-pro-lightgray">
        You can reach us anytime
      </p>
      <form className="space-y-4" onSubmit={handleSubmit} aria-label="Contact Us Form">
        <div className="flex gap-4">
          <div className="w-full">
            <label htmlFor="first_name" className="sr-only">
              First name
            </label>
            <input
              type="text"
              id="first_name"
              value={firstName}
              className="w-full rounded-2xl border p-2"
              placeholder="First name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="last_name" className="sr-only">
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              value={lastName}
              className="w-full rounded-2xl border p-2"
              placeholder="Last name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="relative mb-6">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="align-items-center flex">
            <svg
              className="absolute ml-3 mt-2.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5l9 7 9-7"
              />
            </svg>
            <input
              type="email"
              id="email"
              value={email}
              className="w-full rounded-2xl border pb-2 pl-10 pt-2"
              placeholder="Your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone_number" className="sr-only">
            Phone number
          </label>
          <input
            type="text"
            id="phone_number"
            value={phoneNumber}
            className="w-full rounded-2xl border p-2"
            placeholder="+923001234567"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div className="relative mt-4">
            <label htmlFor="message" className="sr-only">
              How can we help?
            </label>
            <textarea
              id="message"
              rows="4"
              maxLength={maxLength}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="relative w-full rounded-2xl border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="How can we help?"
              required
            ></textarea>
            <span className="absolute bottom-2 right-2 text-xs text-gray-600">
              {message.length} / {maxLength}
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full transform rounded-3xl bg-pro-orange py-2.5 text-center text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Submit
        </button>
        <p className="mt-4 text-xs text-pro-lightgray">
          By contacting us, you agree to our Terms of Service and Privacy Policy
        </p>
      </form>
    </div>
  );
}
