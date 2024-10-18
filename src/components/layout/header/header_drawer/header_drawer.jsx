import React from "react";
import { Image, Modal, Offcanvas } from "react-bootstrap";
import styles from "./header_drawer.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Link from "next/link";

const HeaderDrawer = ({ show, setShow, pages, router }) => {
  return (
    <Offcanvas
      show={show}
      onHide={() => {
        setShow(false);
      }}
      placement="end"
    >
      <Modal.Header closeButton className={styles.Header}>
        <Image src="/logo/logo.png" alt="logo" width={150} />
      </Modal.Header>

      <Modal.Body className={styles.body}>
        <div>
          <nav>
            <ul>
              {pages.map((page) => {
                return (
                  <li
                    key={page.name}
                    className={`${styles.navItem} ${
                      router.pathname === page.href ? styles.active : ""
                    }`}
                  >
                    <Link
                      href={page.href}
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      {page.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <CustomButton>Donate Us</CustomButton>
          </nav>
        </div>
      </Modal.Body>
    </Offcanvas>
  );
};

export default HeaderDrawer;
