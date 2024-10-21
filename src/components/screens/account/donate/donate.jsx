import React, { useEffect, useState } from "react";
import styles from "./donate.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomInput from "@/components/ui/custom_input/custom_input";
import { useRouter } from "next/router";
import DONATION_PLANS from "@/constants/donation-palns";
import { Form } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { v4 } from "uuid";
import { addData } from "@/libs/firebase/firebase";
import PaymentForm from "./payment/payment";

const DonateScreen = ({ currentUser }) => {
  const router = useRouter();
  const { id } = router.query;
  const [currentDonationPlan, setCurrentDonationPlan] = useState(null);
  const [showPaymentFor, setShowPaymentFor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [otherPrice, setOtherPrice] = useState(null);
  const [values, setValues] = useState({
    ...currentUser,
    gender: "",
    status: "Pending",
  });

  useEffect(() => {
    if (id) {
      setCurrentDonationPlan(() => {
        return (
          DONATION_PLANS.find((plan) => plan.id == id) || DONATION_PLANS?.[0]
        );
      });
    } else {
      DONATION_PLANS?.[0];
    }
  }, [id]);

  const createDonation = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const donationID = v4();
      const payload = {
        id: donationID,
        ...values,
        amount: otherPrice || currentDonationPlan.price,
        createdAt: new Date().toDateString(),
        plan: currentDonationPlan.title,
      };

      const res = await addData("donations", payload, donationID);

      if (res) {
        setShowPaymentFor(payload);
      }
    } catch (err) {
      alert("Something Went Wrong");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.DonateUsScreen}>
      <div className={styles.banner}>
        <h1>Donate us</h1>
        <h3>
          Service to others is the rent you pay for your room here on earth.
        </h3>
      </div>
      <div className={styles.cont}>
        <CustomContainer variant={1}>
          <div className={styles.head}>
            <h5>Help Us Grow with a</h5>
            <h2>Monthly Sponsorship</h2>
            <hr />
            <br />
            <br />
          </div>
        </CustomContainer>
        <CustomContainer variant={2}>
          <div className={styles.formCont}>
            <div className={styles.info}>
              <p>Plan : {currentDonationPlan?.title}</p>
            </div>
            <br />
            {showPaymentFor ? (
              <PaymentForm />
            ) : (
              <form onSubmit={createDonation}>
                <CustomInput value={currentUser?.fullName} disabled />
                <CustomInput value={currentUser?.email} disabled />
                <CustomInput value={currentUser?.phoneNumber} disabled />
                <CustomInput placeHolder="Alternate Mobile Number" />
                <div className={styles.gender}>
                  <p>Gender</p>
                  <input
                    type="radio"
                    required
                    id="male"
                    name="gender"
                    value="Male"
                    checked={values.gender == "Male"}
                    onChange={(e) => {
                      setValues((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }));
                    }}
                  />
                  <label for="male">Male</label>
                  <input
                    type="radio"
                    required
                    id="female"
                    name="gender"
                    value="Female"
                    checked={values.gender == "Female"}
                    onChange={(e) => {
                      setValues((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }));
                    }}
                  />
                  <label for="female">Female</label>
                  <input
                    type="radio"
                    required
                    id="Others"
                    name="gender"
                    value="Others"
                    checked={values.gender == "Others"}
                    onChange={(e) => {
                      setValues((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }));
                    }}
                  />
                  <label for="Others">Others</label>
                </div>
                <div className={styles.info}>
                  <p>Sponsor Amount :</p>
                  <div>
                    <span>
                      <Form.Check
                        onChange={(e) => {
                          if (e.target.checked) {
                            setOtherPrice(null);
                          } else {
                            setOtherPrice(100);
                          }
                        }}
                        checked={otherPrice === null}
                      />{" "}
                      ₹{currentDonationPlan?.price}
                    </span>
                  </div>
                  <div>
                    <span>
                      <Form.Check
                        onChange={(e) => {
                          if (e.target.checked) {
                            setOtherPrice(100);
                          } else {
                            setOtherPrice(null);
                          }
                        }}
                        checked={otherPrice !== null}
                      />
                      Other
                    </span>
                  </div>
                </div>
                {otherPrice !== null && (
                  <CustomInput
                    placeHolder="Price"
                    value={otherPrice}
                    type="number"
                    style={{ width: "120px" }}
                    min={100}
                    minLen={100}
                    onChange={(e) => {
                      setOtherPrice(e.target.value);
                    }}
                    required
                  />
                )}
                <CustomButton btnType="submit" isLoading={isLoading}>
                  Submit
                </CustomButton>
              </form>
            )}
          </div>
        </CustomContainer>
      </div>
    </main>
  );
};

export default DonateScreen;
