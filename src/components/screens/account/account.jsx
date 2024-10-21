import React, { useEffect, useState } from "react";
import LoginScreen from "./login/login";
import ManageAccount from "./manage/manage";

const AccountScreen = ({ currentUser }) => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    setIsLogin(!currentUser);
  }, [currentUser]);

  return (
    <div>
      {isLogin ? (
        <LoginScreen setIsLoginScreen={setIsLogin} />
      ) : (
        <ManageAccount currentUser={currentUser} />
      )}
    </div>
  );
};

export default AccountScreen;
