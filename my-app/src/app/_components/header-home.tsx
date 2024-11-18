"use client";
import { useState } from 'react';
import Image from 'next/image';

export function HeaderHome() {
  // State to control the visibility of additional buttons
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

  // Toggle function for additional buttons
  const toggleButtons = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };

  return (
    <header className="flex flex-col items-center justify-center w-full p-6 bg-gradient-to-b from-green-100 to-white text-green-700 shadow-lg border-b-4 border-green-500">
      {/* Logo Section (Centralized and Resized) */}
      <div className="w-64 h-24 md:w-80 md:h-28 relative mb-4">
        <Image
          src="/images/logo.png"
          alt="GV"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Navigation Buttons (Responsive Layout) */}
      <nav className="flex flex-wrap gap-4 mt-4 justify-center items-center w-full">
        {/* Button for Início (Highlighted) */}
        <a href="/" className="w-full md:w-auto">
          <button className="px-8 py-4 font-semibold bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-600 hover:text-white transition-transform transform hover:-translate-y-1 hover:shadow-xl text-lg">
            Início
          </button>
        </a>
        {/* Button for Projeto (Highlighted) */}
        <a href="/Projeto" className="w-full md:w-auto">
          <button className="px-8 py-4 font-semibold bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-600 hover:text-white transition-transform transform hover:-translate-y-1 hover:shadow-xl text-lg">
            Projeto
          </button>
        </a>

        {/* Toggle Button for Additional Buttons (Styled to Match) */}
        <button
          onClick={toggleButtons}
          className="px-8 py-4 font-semibold bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:-translate-y-1 hover:shadow-xl text-lg"
        >
          {showAdditionalButtons ? 'Esconder' : 'Mostrar Mais'}
        </button>

        {/* Additional Buttons (Hidden by Default, Responsive Layout) */}
        {showAdditionalButtons && (
          <div className="flex flex-wrap gap-4 mt-4 justify-center items-center w-full">
            <a href="/Login" className="w-full md:w-auto">
              <button className="px-6 py-3 font-semibold bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 hover:text-white transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                Login
              </button>
            </a>
            <a href="/Cadastro" className="w-full md:w-auto">
              <button className="px-6 py-3 font-semibold bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 hover:text-white transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                Cadastro
              </button>
            </a>
            <a href="/Indicados" className="w-full md:w-auto">
              <button className="px-6 py-3 font-semibold bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 hover:text-white transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                Indicados
              </button>
            </a>
            <a href="/Desenvolvedores" className="w-full md:w-auto">
              <button className="px-6 py-3 font-semibold bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 hover:text-white transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                Desenvolvedores
              </button>
            </a>
            <a href="/Feedback" className="w-full md:w-auto">
              <button className="px-6 py-3 font-semibold bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 hover:text-white transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                Feedback
              </button>
            </a>
          </div>
        )}
      </nav>

      {/* Decorative Element */}
      <div className="mt-6 w-full h-1 bg-yellow-300 rounded-full"></div>
    </header>
  );
}
