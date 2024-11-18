"use client";

import { FaLightbulb, FaSolarPanel, FaBicycle, FaRecycle, FaLeaf } from 'react-icons/fa';

export default function HowItWorksInteractive() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-green-600 p-10 min-h-screen">
      <h2 className="text-4xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
        Transforme Seu Mundo com Energia Verde
      </h2>
      <p className="text-lg text-white max-w-4xl text-center mb-10 shadow-md p-4 bg-green-800/80 rounded-lg">
        Nosso site é uma plataforma dedicada a mostrar para você o conhecimento sobre energia sustentável. Conscientize-se, inspire-se e adote práticas para um futuro mais limpo. Descubra como pequenas ações podem gerar um impacto positivo no planeta atraves das nossas dicas diarias.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
          <div className="flex items-center mb-3">
            <FaLightbulb className="text-yellow-500 text-3xl mr-3" />
            <h3 className="text-2xl font-bold text-green-800">Conscientização em Ação</h3>
          </div>
          <p className="text-gray-700">
            Nossas mensagens diarias e interativas oferece conteúdos educativos sobre energia renovável, mostrando como pequenas mudanças podem fazer uma grande diferença. Reduza o desperdício, use fontes limpas e seja um catalisador de mudanças para um futuro mais sustentável.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
          <div className="flex items-center mb-3">
            <FaSolarPanel className="text-orange-500 text-3xl mr-3" />
            <h3 className="text-2xl font-bold text-green-800">Energia Verde no Dia a Dia</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Pequenas ações, grandes resultados. Aqui estão algumas dicas:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Use lâmpadas LED:</strong> Economize energia e aumente a durabilidade.
            </li>
            <li>
              <strong>Desligue aparelhos no standby:</strong> Reduza o consumo passivo.
            </li>
            <li>
              <strong>Invista em energia solar:</strong> Aproveite energia limpa.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
          <div className="flex items-center mb-3">
            <FaBicycle className="text-blue-500 text-3xl mr-3" />
            <h3 className="text-2xl font-bold text-green-800">Transporte Sustentável</h3>
          </div>
          <p className="text-gray-700">
            Prefira bicicletas, transporte público ou veículos elétricos. Cada escolha reduz a pegada de carbono e promove um estilo de vida mais saudável.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
          <div className="flex items-center mb-3">
            <FaRecycle className="text-green-500 text-3xl mr-3" />
            <h3 className="text-2xl font-bold text-green-800">Reciclagem e Reutilização</h3>
          </div>
          <p className="text-gray-700">
            Reduza, reutilize e recicle sempre que possível. O consumo consciente de recursos naturais é vital para um planeta sustentável.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
          <div className="flex items-center mb-3">
            <FaLeaf className="text-green-700 text-3xl mr-3" />
            <h3 className="text-2xl font-bold text-green-800">Inspire e Seja a Mudança</h3>
          </div>
          <p className="text-gray-700">
            Compartilhe seu conhecimento, inspire amigos e familiares e seja um exemplo de transformação sustentável. Juntos, podemos criar um futuro mais verde e promissor.
          </p>
        </div>
      </section>

      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-3">Vamos Começar!</h3>
        <p className="text-gray-700 mb-4">
          Está pronto para fazer parte da mudança? Explore nosso site, descubra conteúdos valiosos e aplique a energia verde em seu dia a dia.
        </p>
        <a href="/Indicados">
        <button className="px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-600 transition transform hover:scale-105">
           Conscientize 
        </button>
        </a>
      </div>
    </div>
  );
}
