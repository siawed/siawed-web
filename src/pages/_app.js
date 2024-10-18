import "@/styles/globals.css";
import "aos/dist/aos.css";
import Layout from "@/components/layout/layout";
import fonts from "@/styles/fonts/fonts";
import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";
import Head from "next/head";
import Aos from "aos";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, getDataByQuery } from "@/libs/firebase/firebase";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [currentUser, setCurrentUser] = useState(undefined);

  // console.log();

  useEffect(() => {
    onAuthStateChanged(auth, async (session, x) => {
      if (session) {
        const user = await getDataByQuery("users", ["uid", "==", session.uid]);
        if (user?.[0]) {
          setCurrentUser(user?.[0]);
        }
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>SIAWED</title>
      </Head>
      <main className={` ${styles.body}`}>
        <Layout currentUser={currentUser}>
          <Component {...pageProps} currentUser={currentUser} />
        </Layout>
      </main>
    </>
  );
}
