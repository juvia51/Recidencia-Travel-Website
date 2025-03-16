"use client"
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {isOpen && (
        <iframe
          src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/13/04/20250313043241-SPBS7IC8.json"
          className="fixed bottom-16 right-6 w-80 sm:w-96 h-[500px] border-none shadow-lg rounded-lg z-50"
        ></iframe>
      )}
    </>
  );
}
