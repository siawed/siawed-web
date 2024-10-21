import React from "react";
import { Image, Modal, Offcanvas } from "react-bootstrap";
import styles from "./header_drawer.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/libs/firebase/firebase";

const HeaderDrawer = ({ show, setShow, pages, router, currentUser }) => {
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
        <div className={styles.top}>
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
            <CustomButton
              href="/donate-us"
              clickHandler={() => {
                setShow(false);
              }}
            >
              Donate Us
            </CustomButton>
          </nav>
        </div>
        <div className={styles.btns}>
          {currentUser ? (
            <>
              <CustomButton
                variant={1}
                href="/account"
                clickHandler={() => {
                  setShow(false);
                }}
              >
                My Account
              </CustomButton>
              <CustomButton
                variant={2}
                clickHandler={async () => {
                  await signOut(auth);
                }}
              >
                Logout
              </CustomButton>
            </>
          ) : (
            <CustomButton
              variant={2}
              href="/account"
              clickHandler={() => {
                setShow(false);
              }}
            >
              Login
            </CustomButton>
          )}
        </div>
      </Modal.Body>
    </Offcanvas>
  );
};

export default HeaderDrawer;
