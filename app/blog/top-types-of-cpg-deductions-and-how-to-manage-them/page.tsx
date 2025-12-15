"use client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import { BlogContent, Contact } from "@/sections";

import { useState } from "react";

export default function BlogPage() {
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
      <BlogContent />
      <Contact handleOpen={handleOpenModal} />
      <Footer />
      {openModal && <Modal isOpen={openModal} handleClose={handleCloseModal} />}
    </>
  );
}
