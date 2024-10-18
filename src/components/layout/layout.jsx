import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      {/* doserf2024 */}

      {children}
      <Footer />
      <div>
        <br />
        {/* <Link
          target="_blank"
          href="upi://pay?pa=s.rajarathinam1999@okaxis&pn=Raja Rathinam&am=100&cu=INR"
        >
          Buy Now
        </Link> */}
        <br />
      </div>
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
