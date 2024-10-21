import React, { useState } from "react";
import styles from "./edit_gallery.module.scss";
import CustomInput from "@/components/ui/custom_input/custom_input";
import { Col, Image, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import {
  addData,
  deletData,
  deleteFolder,
  deletFile,
  getAllData,
  uploadFile,
} from "@/libs/firebase/firebase";
import { v4 } from "uuid";
import { Trash, TrashFill } from "react-bootstrap-icons";
import LoadingScreen from "@/components/ui/loading/loading";

const EditGallery = ({ setCurrentScreen }) => {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = async () => {
    try {
      const res = await getAllData("gallery_images");
      setImages(res);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  useState(() => {
    fetchImages();
  }, []);

  const uploadImage = async () => {
    setIsLoading(true);
    try {
      const url = await uploadFile(file, "gallery_images");
      if (url) {
        const id = v4();
        const res = await addData(
          "gallery_images",
          {
            id,
            imgUrl: url,
            fileName: file.name,
            createdAt: new Date().toDateString(),
          },
          id
        );
        if (res) {
          setImages((prev) => [res, ...prev]);
        }
        setFile(null);
        alert("Success");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteImage = async (img) => {
    setIsLoading(true);
    try {
      await deletFile(`gallery_images`, img.fileName);
    } catch (error) {
      console.log(error);
    }
    await deletData("gallery_images", img.id);
    setImages((prev) => prev.filter((i) => i.id !== img.id));
    setIsLoading(false);
  };

  return (
    <>
      <br />
      <CustomButton
        clickHandler={() => {
          setCurrentScreen("users");
        }}
      >
        Manage Users
      </CustomButton>
      <div className={styles.cont}>
        {isLoading && <LoadingScreen />}
        <CustomInput
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          accept=".jpg, .png, .jpeg"
          maxLength={1}
        />
        <br />
        {file && (
          <div className={styles.preview}>
            <Image src={URL.createObjectURL(file)} height={200} />
            &nbsp; &nbsp;
            <CustomButton clickHandler={uploadImage} isLoading={isLoading}>
              Upload
            </CustomButton>
          </div>
        )}
        <br />
        <br />
        <h3>All Images</h3>
        <Row>
          {images.map((img) => {
            return (
              <Col key={img.id} xs={6} md={4} lg={3}>
                <div className={styles.img}>
                  <Image src={img.imgUrl} fluid />
                  <TrashFill
                    onClick={() => {
                      deleteImage(img);
                    }}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default EditGallery;
