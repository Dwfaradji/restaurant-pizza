import React from 'react';
import { useRouter } from 'next/navigation';

interface ButtonFilterProps {
  btnName: { btn1: string; btn2: string; btn3: string };
  filter: string;
  // eslint-disable-next-line no-unused-vars
  setFilter: (filter: string) => void; // Fonction pour définir le filtre
  filterName: { name1: string; name2: string; name3: string };
}

const ButtonFilter = ({
  btnName,
  filter,
  setFilter,
  filterName,
}: ButtonFilterProps) => {
  const router = useRouter();
  const { btn1, btn2, btn3 } = btnName; // Récupérer les noms des boutons
  const { name1, name2, name3 } = filterName;

  // Fonction pour gérer le clic sur un bouton
  const handleClick = (btn: string) => {
    setFilter(btn); // Met à jour l'état local du filtre
    router.push(`/pizzas-list/${btn}`); // Change l'URL dynamiquement
  };

  return (
    <div className="mb-6 flex justify-center space-x-4">
      {[name1, name2, name3].map((btn) => (
        <button
          key={btn}
          onClick={() => handleClick(btn)}
          className={`rounded-lg px-4 py-2 shadow ${
            filter === btn
              ? btn === name1
                ? 'bg-orange-500 text-white'
                : btn === name2
                  ? 'bg-red-500 text-white'
                  : 'bg-yellow-500 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          {btn === name1 ? btn1 : btn === name2 ? btn2 : btn3}
        </button>
      ))}
    </div>
  );
};

export default ButtonFilter;
