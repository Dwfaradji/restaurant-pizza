import React from 'react';

interface CalorieProgressProps {
  calories: number;
  maxCalories: number;
}
const CalorieProgress = ({ calories, maxCalories }: CalorieProgressProps) => {
  const percentage = Math.min((calories / maxCalories) * 100, 100); // Limite à 100%
  // const strokeDasharray = `${percentage} 100`; // Ajuste la barre
  const radius = 45; // Rayon du cercle
  const circumference = 2 * Math.PI * radius; // Périmètre du cercle

  return (
    <div className="relative size-28">
      {/* SVG du cercle */}
      <svg
        className="size-full"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cercle de fond */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e5e7eb" // Gris clair pour le fond
          strokeWidth="10"
          fill="none"
        />
        {/* Barre de progression */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#f97316" // Couleur principale (orange)
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={(1 - percentage / 100) * circumference}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s ease' }} // Animation fluide
        />
      </svg>
      {/* Texte au centre */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <span className="text-2xl font-bold text-gray-800">{calories}</span>
          <span className="text-sm text-gray-500"> kcal</span>
          <p className="text-xs text-gray-400">
            {percentage.toFixed(1)}% atteint
          </p>
        </div>
      </div>
    </div>
  );
};
export default CalorieProgress;

// // Exemple d'intégration
// export default function PizzaCard({ pizza }) {
//   const maxCalories = 2000; // Exemple : objectif quotidien
//   const { calories } = pizza.nutrition;
//
//   return (
//     <div>
//       <h1 className="text-lg font-semibold mb-2">Calories</h1>
//       <CalorieProgress calories={calories} maxCalories={maxCalories} />
//     </div>
//   );
// }
