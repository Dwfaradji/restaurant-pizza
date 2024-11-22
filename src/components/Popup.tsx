// components/Popup.tsx
import React from 'react';
import { Pizza } from '@/data/pizzas';

interface PopupProps {
  pizza: Pizza;
  onClose: () => void;
  onAdd: () => void;
}

const Popup: React.FC<PopupProps> = ({ pizza, onClose, onAdd }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Ajouter au panier
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          {pizza.title} - {pizza.price}€
        </p>
        <button
          onClick={onAdd}
          className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 mr-2"
        >
          Ajouter
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

export default Popup;
