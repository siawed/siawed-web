import React, { useState } from "react";
import styles from "./news_letter_subscription_box.module.scss";
import CustomContainer from "../ui/custom_container/custom_container";
import CustomInput from "../ui/custom_input/custom_input";
import CustomButton from "../ui/custom_button/custom_button";
import { v4 } from "uuid";
import { addData } from "@/libs/firebase/firebase";

const NewLetterSubscriptionBox = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const subscribe = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const id = v4();
      const res = await addData(
        "subscriptions",
        {
          id,
          email,
          createdAt: new Date().toDateString(),
        },
        id
      );

      if (res) {
        alert("Success");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.NewLetterSubscriptionBox}>
      <CustomContainer>
        <form className={styles.wrap} onSubmit={subscribe}>
          <h2>Join Our Community</h2>
          <p>
            Enter your email address to register to our newsletter subscription
            delivered on regular basis!{" "}
          </p>
          <CustomInput
            placeHolder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomButton btnType="submit" isLoading={isLoading}>
            Subscribe
          </CustomButton>
        </form>
      </CustomContainer>
    </section>
  );
};

export default NewLetterSubscriptionBox;
