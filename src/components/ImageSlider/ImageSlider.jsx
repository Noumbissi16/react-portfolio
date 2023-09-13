import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
function ImageSlider({ imageList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const openModalSlider = (imgIndex) => {
    setCurrentImageIndex(imgIndex);
    setIsModalOpen(true);
  };
  const renderImages = () => {
    // eslint-disable-next-line react/prop-types
    return imageList.map((imageLink, i) => {
      return (
        <Image
          src={imageLink}
          boxShadow="xl"
          borderRadius={"xl"}
          key={imageLink}
          onClick={() => openModalSlider(i)}
        />
      );
    });
  };
  const slider = (
    // eslint-disable-next-line react/prop-types
    <Slide
      defaultIndex={currentImageIndex}
      autoplay={false}
      // eslint-disable-next-line react/prop-types
      arrows={imageList.length > 1}
    >
      {renderImages()}
    </Slide>
  );

  const modalSlider = (
    <Modal
      size={"6xl"}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow={"none"}>
        <ModalCloseButton zIndex={1} bg={"white"} />
        <ModalBody>{slider}</ModalBody>
      </ModalContent>
    </Modal>
  );
  return (
    <>
      <Box w={350}>{slider}</Box>
      {modalSlider}
    </>
  );
}

export default ImageSlider;
