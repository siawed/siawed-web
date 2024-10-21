import DonateScreen from "@/components/screens/account/donate/donate";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const DonatePage = ({ currentUser }) => {
  const router = useRouter();
  useEffect(() => {
    if (currentUser === null) {
      router.push(`/account?redirect=account/donate?id=${router.query.id}`);
    }
  }, [currentUser]);

  return <DonateScreen currentUser={currentUser} />;
};

export default DonatePage;
