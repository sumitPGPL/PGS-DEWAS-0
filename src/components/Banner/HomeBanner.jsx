'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Modal from '@/components/Banner/Modal';
import { BANNER_INITIAL } from '@/lib/constants';
import { uploadImg } from '@/lib/services/files/fileServices';
import { postBanner } from '@/lib/services/banner/banner';
// import { uploadImg } from '@/services/cloudinary'; // Import your Cloudinary upload service here
// import { apiCall } from '@/services/api'; // Import your API service here

const ReuseCard = dynamic(() => import('@/components/Banner/ReuseCard'), { ssr: false });

const cardsData = [
  {
    id: 1,
    title: 'Home_Top_Carousel',
    buttonText: 'EDIT',
    fileInputs: 4,
    showTextInput: false,
  },
  {
    id: 2,
    title: 'Our_Testimonials',
    buttonText: 'EDIT',
    fileInputs: 3,
    showTextInput: true,
  },
  {
    id: 3,
    title: 'Home_Bottom_Image_Gallery',
    buttonText: 'EDIT',
    fileInputs: 5,
    showTextInput: false,
  },
];

const CardList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [imageFiles, setImageFiles] = useState([null, null, null, null]); // State to store image files
  const [imageUrls, setImageUrls] = useState([]); // State to store Cloudinary image URLs

  const handleButtonClick = (id) => {
    const card = cardsData.find((card) => card.id === id);
    setSelectedCard(card);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
    setImageFiles([null, null, null, null]); // Reset image files on modal close
    setImageUrls([]); // Reset image URLs on modal close
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedCard.title === 'Home_Top_Carousel') {
      try {
        // Upload each image file to Cloudinary and get URLs
        const uploadPromises = imageFiles.map(async (file) => {
          if (file) {
            const imgRes = await uploadImg({ img: file, category: "carousel" }); // Upload image to Cloudinary
            return imgRes; // Store Cloudinary URL
          }
          return null;
        });

        const cloudinaryUrls = await Promise.all(uploadPromises);

        // Construct the payload for the API call using Cloudinary image URLs
        const payload = {
          imgUrl: cloudinaryUrls.filter(url => url !== null),
          type: "HOME_TOP_CAROUSEL"
        };

        console.log(payload);
        // Perform the API call with the constructed payload
        const response = await postBanner(payload); // Replace apiCall with your actual API call function
        console.log('API response:', response);
      } catch (error) {
        console.error('Error occurred while calling the API:', error);
      }
    }
    handleCloseModal();
  };

  const handleFileChange = (index, file) => {
    const newImageFiles = [...imageFiles];
    newImageFiles[index] = file;
    setImageFiles(newImageFiles);
  };

  return (
    <div>
      {cardsData.map((card) => (
        <ReuseCard
          key={card.id}
          title={card.title}
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
              {/* Render file upload inputs for image files */}
              {[...Array(selectedCard.fileInputs)].map((_, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Image File {index + 1}
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="file"
                    onChange={(e) => handleFileChange(index, e.target.files[0])}
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
