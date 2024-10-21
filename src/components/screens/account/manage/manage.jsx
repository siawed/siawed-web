import React, { useEffect, useState } from "react";
import styles from "./manage.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Accordion, Col, Row } from "react-bootstrap";
import { getAllData, getDataByQuery } from "@/libs/firebase/firebase";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import CustomButton from "@/components/ui/custom_button/custom_button";
import EditGallery from "./edit_gallery/edit_gallery";

const ManageAccount = () => {
  const [donations, setDonations] = useState([]);
  const [users, setUsers] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const fetchDonations = async () => {
    try {
      const donationsRes = await getAllData("donations");
      const usersRes = await getAllData("users");
      const subsRef = await getAllData("subscriptions");

      setDonations(donationsRes || []);
      setUsers(usersRes || []);
      setSubscribers(subsRef || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  // Column Definitions: Defines the columns to be displayed.
  const colDefs = [
    { field: "fullName" },
    { field: "email" },
    { field: "phoneNumber" },
  ];
  const donationColDefs = [
    { field: "createdAt" },
    { field: "fullName" },
    { field: "amount" },
    { field: "status" },
    { field: "plan" },
    { field: "email" },
    { field: "phoneNumber" },
    { field: "transactionId" },
    { field: "upiId" },
    { field: "referenceNumber" },
  ];

  const [currentScreen, setCurrentScreen] = useState("users");

  return (
    <main className={styles.ManageAccount}>
      <div className={styles.banner}>
        <h1>Admin</h1>
      </div>
      <CustomContainer>
        {currentScreen === "users" && (
          <div className={styles.cont}>
            <CustomButton
              clickHandler={() => {
                setCurrentScreen("gallery");
              }}
            >
              Edit Gallery
            </CustomButton>
            <br />
            <br />
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Users</Accordion.Header>
                <Accordion.Body>
                  <div className={styles.profile}>
                    <h2>Users</h2>
                    <div
                      className="ag-theme-quartz" // applying the Data Grid theme
                      style={{ height: 200 }} // the Data Grid will fill the size of the parent container
                    >
                      {donations?.[0] && (
                        <AgGridReact rowData={users} columnDefs={colDefs} />
                      )}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <br />
              <Accordion.Item eventKey="1">
                <Accordion.Header>Donations</Accordion.Header>
                <Accordion.Body>
                  <div className={styles.profile}>
                    <h2>Donations</h2>
                    <div
                      className="ag-theme-quartz" // applying the Data Grid theme
                      style={{ height: 500 }} // the Data Grid will fill the size of the parent container
                    >
                      {donations?.[0] && (
                        <AgGridReact
                          rowData={donations}
                          columnDefs={donationColDefs}
                        />
                      )}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <br />
              <Accordion.Item eventKey="2">
                <Accordion.Header>Subscribers</Accordion.Header>
                <Accordion.Body>
                  <div className={styles.profile}>
                    <h2>Subscribers</h2>
                    <div
                      className="ag-theme-quartz" // applying the Data Grid theme
                      style={{ height: 200 }} // the Data Grid will fill the size of the parent container
                    >
                      {donations?.[0] && (
                        <AgGridReact
                          rowData={subscribers}
                          columnDefs={[
                            {
                              field: "email",
                            },
                            {
                              field: "createdAt",
                            },
                          ]}
                        />
                      )}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        )}
        {currentScreen === "gallery" && (
          <EditGallery setCurrentScreen={setCurrentScreen} />
        )}
      </CustomContainer>
    </main>
  );
};

export default ManageAccount;
