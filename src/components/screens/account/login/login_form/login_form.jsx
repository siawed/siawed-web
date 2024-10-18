import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomInput from "@/components/ui/custom_input/custom_input";
import React, { useState } from "react";
import styles from "../login.module.scss";
import { Google } from "react-bootstrap-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/libs/firebase/firebase";

const LoginForm = ({ setIsLogin, redirectUrl, router, setIsLoginScreen }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      if (redirectUrl) {
        router.push(`/${redirectUrl}`);
      } else {
        setIsLoginScreen(false);
      }
    } catch (error) {
      if (error.message.includes("invalid-credential")) {
        alert("invalid-credential");
        setValues({
          email: "",
          password: "",
        });
      }
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={login}>
        <div>
          <h2>Member Login</h2>
          <div>
            <label>Email</label>
            <CustomInput
              placeHolder="Email"
              required
              value={values.email}
              onChange={(e) => {
                setValues((prev) => ({ ...prev, email: e.target.value }));
              }}
              type="email"
            />
          </div>
          <div>
            <label>Password</label>
            <CustomInput
              placeHolder="Password"
              required
              value={values.password}
              type="password"
              onChange={(e) => {
                setValues((prev) => ({ ...prev, password: e.target.value }));
              }}
            />
          </div>

          {/* <div className={styles.divider}>
          <hr />
          <small>or</small>
          <hr />
        </div>
        <div className={styles.googleBtn}>
          <p>
            Continue With Google <Google />
          </p>
        </div> */}
        </div>
        <div>
          <CustomButton
            btnType="submit"
            disabled={
              !(values.email || values.password) || values?.password?.length < 8
            }
            isLoading={isLoading}
          >
            Login
          </CustomButton>
          <div className={styles.opt}>
            <p>
              Don&apos;t have account?{" "}
              <span
                onClick={() => {
                  setIsLogin(false);
                }}
              >
                Signup
              </span>
            </p>
            <p>
              <span>Forgot Password?</span>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
