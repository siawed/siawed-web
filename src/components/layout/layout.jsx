import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Link from "next/link";
import NewLetterSubscriptionBox from "../news_letter_subscription_box/news_letter_subscription_box";

const Layout = ({ children, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />

      {/* doserf2024 */}

      {children}
      <NewLetterSubscriptionBox />
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
