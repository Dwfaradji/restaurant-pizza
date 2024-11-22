'use client';

import React, { useState, useEffect } from 'react';

// Horaires d'ouverture du magasin
const storeHours = {
  monday: { open: '09:00', close: '18:00' },
  tuesday: { open: '09:00', close: '18:00' },
  wednesday: { open: '09:00', close: '18:00' },
  thursday: { open: '09:00', close: '18:00' },
  friday: { open: '09:00', close: '20:00' },
  saturday: { open: '10:00', close: '16:00' },
  sunday: null, // Fermé le dimanche
};

const StoreStatus: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState<string>('');

  // Fonction utilitaire pour comparer les horaires
  const isStoreOpen = (
    current: string,
    open: string,
    close: string
  ): boolean => {
    const [currentH, currentM] = current.split(':').map(Number);
    const [openH, openM] = open.split(':').map(Number);
    const [closeH, closeM] = close.split(':').map(Number);

    // Convertir en minutes pour faciliter la comparaison
    const currentMinutes = currentH * 60 + currentM;
    const openMinutes = openH * 60 + openM;
    const closeMinutes = closeH * 60 + closeM;

    return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const dayOfWeek = now
        .toLocaleString('en-US', { weekday: 'long' })
        .toLowerCase();
      const time = now.toTimeString().slice(0, 5); // HH:mm

      setCurrentDay(dayOfWeek);

      // Vérification des horaires d'ouverture
      const todayHours = storeHours[dayOfWeek as keyof typeof storeHours];
      if (todayHours) {
        setIsOpen(isStoreOpen(time, todayHours.open, todayHours.close));
      } else {
        setIsOpen(false); // Fermé si pas d'horaires
      }
    }, 1000); // Mettre à jour toutes les secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center py-4 top-2">
      <div
        className={`rounded-3xl w-4 h-4 text-white font-bold shadow-md ${
          isOpen ? 'bg-green-500' : 'bg-red-500'
        }`}
      ></div>
      <div className={'sm:hidden'}>{isOpen ? 'Ouvert' : 'Fermé'}</div>
      <p className="mt-4 text-gray-600 hidden sm:flex">
        {isOpen
          ? `Nous sommes ouverts jusqu'à ${storeHours[currentDay as keyof typeof storeHours]?.close}.`
          : storeHours[currentDay as keyof typeof storeHours]?.open
            ? `Réouverture prévue à ${storeHours[currentDay as keyof typeof storeHours]?.open}.`
            : `Le magasin est fermé aujourd'hui.`}
      </p>
    </div>
  );
};

export default StoreStatus;
