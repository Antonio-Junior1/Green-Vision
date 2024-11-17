"use client";

export default function Footer() {
  return (
    <footer className="bg-white text-green-700 py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Detalhes decorativos simplificados */}
        <div className="bg-green-100 rounded-full h-40 w-40 absolute top-10 left-16 opacity-60 blur-lg"></div>
        <div className="bg-yellow-200 rounded-full h-32 w-32 absolute bottom-10 right-20 opacity-50 blur-md"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10 mx-auto py-8 px-6">
        <span className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text tracking-wide">
          Soluções Inovadoras para um Futuro Sustentável
        </span>
        <span className="text-lg text-center max-w-3xl leading-relaxed">
          Transforme suas necessidades em soluções práticas e sustentáveis com o poder da tecnologia e eficiência. Descubra a força de uma abordagem integrada para um amanhã mais verde.
        </span>

        <a href="/Servico" className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg shadow-md hover:shadow-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-green-300">
          Conheça nossos projetos
        </a>

        <div className="w-11/12 border-t border-green-400 my-8" />

        <div className="flex flex-wrap justify-center gap-6">
          <span className="text-base px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors shadow-sm">Energia Sustentável</span>
          <span className="text-base px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full hover:bg-yellow-200 transition-colors shadow-sm">Impacto Positivo</span>
          <span className="text-base px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors shadow-sm">Inovação Verde</span>
        </div>

        <p className="text-center mt-10 max-w-xl leading-relaxed">
          <span className="text-lg text-green-800">Juntos, podemos transformar ideias em realidade e construir um futuro mais verde e consciente.</span>
        </p>
      </div>
    </footer>
  );
}

