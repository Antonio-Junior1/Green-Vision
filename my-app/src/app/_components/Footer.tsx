"use client";



export default function Footer() {
  return (
    <footer className="bg-white text-black py-5">
      <div className="flex flex-col items-center gap-12 mx-auto py-5">
        <span className="text-2xl text-center">Ágil, prático e fácil</span>
        <span className="text-2xl text-center">Descubra seu problema sem sair de casa</span>
        <a href="/Servico" className="px-6 py-3 bg-white text-black rounded-full hover:bg-[#00A1FC] hover:text-white transition-colors duration-300">
          Conheça nosso serviço
        </a>

        <div className="w-full border-t border-gray-800 my-5 overflow-hidden" />

       
      </div>
    </footer>
  );
}
