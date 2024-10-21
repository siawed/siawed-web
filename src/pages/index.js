import AccountScreen from "@/components/screens/account/account";
import HomeScreen from "@/components/screens/home/home";

const Home = ({ currentUser }) => {
  return (
    <>
      <AccountScreen currentUser={currentUser} />;
    </>
  );
};

export default Home;
