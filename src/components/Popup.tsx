// // components/Popup.tsx
// import React from 'react';
// import { Pizza } from '@/data/pizzas';
//
// interface PopupProps {
//   pizza: Pizza;
//   onClose: () => void;
//   onAdd: () => void;
// }
//
// const Popup: React.FC<PopupProps> = ({ pizza, onClose, onAdd }) => {
//   return (
//     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="w-96 rounded-lg bg-white p-6 text-center shadow-lg">
//         <h3 className="mb-4 text-xl font-semibold text-gray-800">
//           Ajouter au panier
//         </h3>
//         <p className="mb-4 text-lg text-gray-700">
//           {pizza.title} - {pizza.price}€
//         </p>
//         <button
//           onClick={onAdd}
//           className="mr-2 rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
//         >
//           Ajouter
//         </button>
//         <button
//           onClick={onClose}
//           className="rounded-lg bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400"
//         >
//           Annuler
//         </button>
//       </div>
//     </div>
//   );
// };
//
// export default Popup;
