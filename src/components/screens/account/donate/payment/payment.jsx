import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomInput from "@/components/ui/custom_input/custom_input";
import { updateData } from "@/libs/firebase/firebase";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Image } from "react-bootstrap";

const PaymentForm = ({ showPaymentFor }) => {
  const [values, setValues] = useState({
    upiId: "",
    transactionId: "",
    referenceNumber: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateData(
        "donations",
        {
          ...showPaymentFor,
          ...values,
        },
        showPaymentFor.id
      );

      alert("Thank You");
      router.replace("/account");
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <Image src="/assets/private/payment_qr.jpeg" width={150} alt="qr" />
        <p>or</p>
        <CustomButton>Pay with UPI</CustomButton>
      </section>
      <CustomInput
        placeHolder="Account no (or) UPI ID*"
        onChange={(e) => {
          setValues((prev) => ({ ...prev, upiId: e.target.value }));
        }}
        value={values.upiId}
        required
      />
      <CustomInput
        placeHolder="Transation ID"
        onChange={(e) => {
          setValues((prev) => ({ ...prev, transactionId: e.target.value }));
        }}
        value={values.transactionId}
      />
      <CustomInput
        placeHolder="Refernce number"
        onChange={(e) => {
          setValues((prev) => ({ ...prev, referenceNumber: e.target.value }));
        }}
        value={values.referenceNumber}
      />
      <CustomButton btnType={"submit"}>Submit</CustomButton>
    </form>
  );
};

export default PaymentForm;
