import CustomContainer from "@/components/ui/custom_container/custom_container";
import LoginForm from "./login_form/login_form";
import styles from "./login.module.scss";
import { useRouter } from "next/router";

const LoginScreen = ({ setIsLoginScreen }) => {
  const router = useRouter();

  return (
    <main className={styles.LoginScreen}>
      <CustomContainer variant={2}>
        <div className={styles.contBox}>
          <div className={styles.left} data-aos="flip-left"></div>
          <div className={styles.right} data-aos="flip-right">
            <LoginForm router={router} setIsLoginScreen={setIsLoginScreen} />
          </div>
        </div>
      </CustomContainer>
    </main>
  );
};

export default LoginScreen;
