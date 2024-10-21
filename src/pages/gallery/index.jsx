import GalleryScreen from "@/components/screens/gallery/gallery";
import { getAllData } from "@/libs/firebase/firebase";
import React from "react";

const GalleryPage = ({ images }) => {

  return <GalleryScreen images={images} />;
};

export default GalleryPage;

export const getServerSideProps = async () => {
  try {
    const res = await getAllData("gallery_images");

    return {
      props: {
        images: res,
      },
    };
  } catch (error) {
    return {
      props: {
        images: [],
        error: error.message,
      },
    };
  }
};
