import React, { useState } from "react";

import styles from "./header.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import Link from "next/link";
import { List, Plus, X } from "react-bootstrap-icons";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { useRouter } from "next/router";
import HeaderDrawer from "./header_drawer/header_drawer";
import PAGES from "@/constants/pages";
import { signOut } from "firebase/auth";
import { auth } from "@/libs/firebase/firebase";

const MenuButton = ({ pages, router }) => {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <>
      <div className={styles.MenuButton}>
        <List
          onClick={() => {
            setShowHeader(true);
          }}
        />
      </div>
      <HeaderDrawer
        show={showHeader}
        setShow={setShowHeader}
        pages={pages}
        router={router}
      />
    </>
  );
};

const Header = ({ currentUser }) => {
  const pages = PAGES;

  const router = useRouter();

  return (
    <header className={styles.Header}>
      <CustomContainer ofHid={false}>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/logo/logo.png" alt="main_logo" width={180} />
            </Link>
          </div>

          <div className={styles.right}>
            <nav className={styles.fullNav}>
              <ul>
                {pages.map((page) => {
                  return (
                    <li
                      key={page.name}
                      className={`${styles.navItem} ${
                        router.pathname === page.href ? styles.active : ""
                      }`}
                    >
                      <Link href={page.href}>{page.name}</Link>
                    </li>
                  );
                })}
                {!currentUser ? (
                  <CustomButton href="/donate-us">Donate Us</CustomButton>
                ) : (
                  <div>
                    <CustomButton href="/account">My Account</CustomButton>
                    &nbsp; &nbsp;
                    <CustomButton
                      clickHandler={async () => {
                        await signOut(auth);
                      }}
                    >
                      Logout
                    </CustomButton>
                  </div>
                )}
              </ul>
            </nav>

            <MenuButton pages={pages} router={router} />
          </div>
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
