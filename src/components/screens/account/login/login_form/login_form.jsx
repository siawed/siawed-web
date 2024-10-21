import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomInput from "@/components/ui/custom_input/custom_input";
import React, { useState } from "react";
import styles from "../login.module.scss";
import { Google } from "react-bootstrap-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/libs/firebase/firebase";

const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (values.email === process.env.NEXT_PUBLIC_SFZOM_QEF) {
        await signInWithEmailAndPassword(auth, values.email, values.password);
      } else {
        throw new Error("invalid-credential");
      }
    } catch (error) {
      alert(error.message);

      setValues({
        email: "",
        password: "",
      });

      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={login}>
        <div>
          <h2>Admin Login</h2>
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
          {/* <div className={styles.opt}>
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
          </div> */}
        </div>
      </form>
    </>
  );
};

export default LoginForm;
