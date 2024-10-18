import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Link from "next/link";

const Layout = ({ children, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />

      {/* doserf2024 */}

      {children}
      <Footer />
    
      <FloatingWhatsApp
        accountName="SIAWED"
        allowClickAway
        allowEsc
        notification={false}
        notificationSound={false}
      />
    </div>
  );
};

export default Layout;
