"use client";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Modal from "@/components/Modal";
import {
  LandingPage,
  Specialization,
  ScrollJacker,
  Customers,
  OurApplications,
  More,
  GetInTouch,
} from "@/sections";
import Footer from "@/components/Footer";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <NavBar handleOpen={handleOpenModal} />
      <LandingPage handleOpen={handleOpenModal} />
      <Specialization />
      <ScrollJacker handleOpen={handleOpenModal} />
      <Customers />
      {/* <OurApplications handleOpen={handleOpenModal} /> */}
      <More />
      <GetInTouch handleOpen={handleOpenModal} />
      <Footer />
      {openModal && <Modal isOpen={openModal} handleClose={handleCloseModal} />}
    </>
  );
}
