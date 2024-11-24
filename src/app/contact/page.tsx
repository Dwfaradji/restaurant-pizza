'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // pour la navigation après soumission (facultatif)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Ajoutez ici la logique pour envoyer les données du formulaire (API ou email)
    console.log('Form data:', formData);
    setIsSubmitted(true);

    // Redirection ou autre action après la soumission
    setTimeout(() => router.push('/'), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
        Contactez-nous
      </h1>

      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Section gauche : Formulaire */}
          <div className="p-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Envoyez-nous un message
            </h2>
            {isSubmitted ? (
              <p className="text-center text-green-500">
                Merci pour votre message ! Nous reviendrons vers vous sous peu.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600"
                >
                  Envoyer
                </button>
              </form>
            )}
          </div>

          {/* Section droite : Infos de contact */}
          <div className="flex flex-col justify-between bg-gray-100 p-6">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                Nos coordonnées
              </h2>
              <p className="mb-2 text-gray-700">
                Nous sommes à votre disposition pour toute question :
              </p>
              <p className="text-gray-700">
                <strong>Adresse :</strong> 123 Avenue de la Pizza, Paris, France
              </p>
              <p className="text-gray-700">
                <strong>Téléphone :</strong>{' '}
                <a
                  href="tel:+33123456789"
                  className="text-orange-500 hover:underline"
                >
                  01 23 45 67 89
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Email :</strong>{' '}
                <a
                  href="mailto:contact@pizzeria.com"
                  className="text-orange-500 hover:underline"
                >
                  contact@pizzeria.com
                </a>
              </p>
            </div>
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999108372789!2d2.292292415674728!3d48.85884407928786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f9c97d1e1d7%3A0x4222cdb4bb9dd7a8!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1633367898294!5m2!1sen!2sfr"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                title="Location"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
