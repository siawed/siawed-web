import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomInput from "@/components/ui/custom_input/custom_input";
import React, { useState } from "react";
import styles from "../login.module.scss";
import { Google } from "react-bootstrap-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addData, auth } from "@/libs/firebase/firebase";
import { v4 } from "uuid";

const SignupForm = ({ setIsLogin, redirectUrl, router, setIsLoginScreen }) => {
  const [values, setValues] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const id = v4();

      const user = await addData(
        "users",
        {
          id,
          uid: res.user.uid,
          fullName: values.fullName,
          phoneNumber: values.phoneNumber,
          email: values.email,
        },
        id
      );

      if (redirectUrl) {
        router.push(`/${redirectUrl}`);
      } else {
        setIsLoginScreen(false);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={signup}>
      <div>
        <h2>Member Signup</h2>
        <div>
          {/* <label>Full Name</label> */}
          <CustomInput
            value={values.fullName}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, fullName: e.target.value }));
            }}
            required
            placeHolder="Full Name"
          />
        </div>
        <div>
          {/* <label>Phone Number</label> */}
          <CustomInput
            value={values.phoneNumber}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, phoneNumber: e.target.value }));
            }}
            required
            placeHolder="Phone Number"
          />
        </div>
        <div>
          {/* <label>Email</label> */}
          <CustomInput
            value={values.email}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, email: e.target.value }));
            }}
            required
            placeHolder="Email"
          />
        </div>
        <div>
          {/* <label>Password</label> */}
          <CustomInput
            value={values.password}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, password: e.target.value }));
            }}
            required
            placeHolder="Password"
          />
        </div>
        <div>
          {/* <label>Confirm</label> */}
          <CustomInput
            value={values.confirmPassword}
            onChange={(e) => {
              setValues((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }));
            }}
            required
            placeHolder="Confirm Password"
          />
        </div>
        <CustomButton
          btnType="submit"
          disabled={
            values?.password?.length < 7 ||
            values.password !== values.confirmPassword
          }
          isLoading={isLoading}
        >
          Signup
        </CustomButton>
        <div className={styles.opt}>
          <p>
            already have account?{" "}
            <span
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Login
            </span>
          </p>
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
    </form>
  );
};

export default SignupForm;
