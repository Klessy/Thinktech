import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { plans } from "../../data";

const WhatsAppButton = ({ plan }) => {
  const message = `Hello ThinkTech, I am interested in the ${plan.name} plan which costs ${plan.price}. Please give me more info.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/2349035917372?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "green",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        textDecoration: "none",
        // marginTop: "10px",
      }}
    >
      <FaWhatsapp size={20} />
      Join Class
    </a>
  );
};

export default WhatsAppButton;
