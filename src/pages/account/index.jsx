import AccountScreen from "@/components/screens/account/account";
import { useRouter } from "next/router";
import React from "react";

const AccountPage = ({ currentUser }) => {

  return <AccountScreen currentUser={currentUser} />;
};

export default AccountPage;
