"use client";

export default function ContactForm() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-800 to-green-700 p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Fale Conosco</h2>
      <form className="flex flex-col w-full max-w-md mt-4 bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="name" className="text-gray-700 mb-2">Nome:</label>
        <input 
          type="text" 
          id="name" 
          className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 ease-in-out"
          placeholder="Seu Nome" 
          required 
        />
        <label htmlFor="email" className="text-gray-700 mb-2">E-mail:</label>
        <input 
          type="email" 
          id="email" 
          className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 ease-in-out"
          placeholder="Seu E-mail" 
          required 
        />
        <label htmlFor="message" className="text-gray-700 mb-2">Mensagem:</label>
        <textarea 
          id="message" 
          className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 ease-in-out"
          placeholder="Sua Mensagem" 
          required 
        />
        <button 
          type="submit" 
          className="px-6 py-3 bg-yellow-500 text-black rounded-lg mt-4 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-600 transition-transform transform hover:scale-105 ease-in-out"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
