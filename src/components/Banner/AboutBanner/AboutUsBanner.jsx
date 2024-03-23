// CardList.js
'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Modal from '@/components/Banner/Modal'; // Assuming you have a Modal component

const ReuseCard = dynamic(() => import('@/components/Banner/ReuseCard'), { ssr: false });

const cardsData = [
  {
    id: 1,
    title: 'About_Top_Carousel',
    buttonText: 'EDIT',
    fileInputs: 4,
    showTextInput: false,
  },
  {
    id: 2,
    title: 'About_Lab_Images',
    buttonText: 'EDIT',
    fileInputs: 6,
    showTextInput: false,
  },
  {
    id: 3,
    title: 'Our_Management_Principle_Image_and_Text',
    buttonText: 'EDIT',
    fileInputs: 1,
    showTextInput: true,
  },
  {
    id: 4,
    title: 'About Horizontal Scroll Images',
    buttonText: 'EDIT',
    fileInputs: 6,
    showTextInput: false,
  },
];

const CardList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleButtonClick = (id) => {
    const card = cardsData.find((card) => card.id === id);
    setSelectedCard(card);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
    handleCloseModal();
  };

  return (
    <div>
      {cardsData.map((card) => (
        <ReuseCard
          key={card.id}
          title={card.title}
          content={card.content}
          buttonText={card.buttonText}
          showTextInput={card.showTextInput}
          onClick={() => handleButtonClick(card.id)}
        />
      ))}
      {modalOpen && selectedCard && (
        <Modal onClose={handleCloseModal}>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold">Edit {selectedCard.title}</h2>
              <button
                className="float-right text-gray-700 hover:text-gray-900"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {/* Render text input based on selected card's showTextInput property */}
              {selectedCard.showTextInput && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Text Input
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  />
                </div>
              )}
              {/* Render file upload inputs based on selected card */}
              {[...Array(selectedCard.fileInputs)].map((_, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    File {index + 1}
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="file"
                  />
                </div>
              ))}
              <div className="flex items-center justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CardList;
