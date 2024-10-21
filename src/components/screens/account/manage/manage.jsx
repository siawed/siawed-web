import React, { useEffect, useState } from "react";
import styles from "./manage.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Row } from "react-bootstrap";
import { getDataByQuery } from "@/libs/firebase/firebase";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import CustomButton from "@/components/ui/custom_button/custom_button";

const ManageAccount = ({ currentUser }) => {
  const [donations, setDonations] = useState();
  const fetchDonations = async () => {
    try {
      const donationsRes = await getDataByQuery("donations", [
        "uid",
        "==",
        currentUser?.uid,
      ]);

      setDonations(donationsRes || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  // Column Definitions: Defines the columns to be displayed.
  const colDefs = [
    { field: "createdAt" },
    { field: "amount" },
    { field: "status" },
    { field: "plan" },
  ];

  return (
    <main className={styles.ManageAccount}>
      <div className={styles.banner}>
        <h1>My Account</h1>
      </div>
      <CustomContainer>
        <div className={styles.cont}>
          <Row>
            <Col xs={12} md={4}>
              <div className={styles.profile}>
                <h2>My Profile</h2>
                <p>Full Name : {currentUser?.fullName}</p>
                <p>Email : {currentUser?.email}</p>
                <p>Phone Number : {currentUser?.phoneNumber}</p>
              </div>
            </Col>
            <Col>
              <div className={styles.profile}>
                <h2>My Donations</h2>
                <div
                  className="ag-theme-quartz" // applying the Data Grid theme
                  style={{ height: 200 }} // the Data Grid will fill the size of the parent container
                >
                  {donations?.[0] && (
                    <AgGridReact rowData={donations} columnDefs={colDefs} />
                  )}
                </div>
                <CustomButton href="/donate-us">Donate Now</CustomButton>
              </div>
            </Col>
          </Row>
        </div>
      </CustomContainer>
    </main>
  );
};

export default ManageAccount;
