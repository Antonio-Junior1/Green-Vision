import Image from 'next/image';

export function HeaderHome() {
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

      {/* Navigation Buttons (Below Logo) */}
      <nav className="flex flex-col md:flex-row gap-4 mt-4 items-center">
        <a href="/" className="w-full md:w-auto">
          <button className="px-6 py-3 font-semibold bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 hover:text-white transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            Início
          </button>
        </a>
        <a href="/login" className="w-full md:w-auto">
          <button className="px-6 py-3 font-semibold bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 hover:text-white transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            Log in
          </button>
        </a>
        <a href="/Dados-Cadastro" className="w-full md:w-auto">
          <button className="px-6 py-3 font-semibold bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 hover:text-white transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            Dados Cliente
          </button>
        </a>
      </nav>

      {/* Decorative Element */}
      <div className="mt-6 w-full h-1 bg-yellow-300 rounded-full"></div>
    </header>
  );
}
