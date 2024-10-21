import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomInput from "@/components/ui/custom_input/custom_input";
import React from "react";
import { Image } from "react-bootstrap";

const PaymentForm = () => {
  return (
    <form>
      <section>
        <Image src="/assets/private/payment_qr.jpeg" width={150} alt="qr" />
        <p>or</p>
        <CustomButton>Pay with UPI</CustomButton>
      </section>
      <CustomInput placeHolder="Account no (or) UPI ID*" />
      <CustomInput placeHolder="Transation ID*" />
      <CustomInput placeHolder="Refernce number*" />
      <CustomButton>Submit</CustomButton>
    </form>
  );
};

export default PaymentForm;
