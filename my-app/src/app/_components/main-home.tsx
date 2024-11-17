import Image from "next/image";
import { FaLeaf, FaSolarPanel, FaWind } from "react-icons/fa";

export function MainHome() {
  return (
    <main className="bg-green-600 w-full min-h-screen flex flex-col justify-center items-center text-center">
      <div className="text-white flex flex-col-reverse md:flex-row items-center justify-center p-8 md:p-16 lg:p-24 gap-12">
        <div className="flex flex-col gap-4 max-w-lg md:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Conscientize-se: Energia Verde é o Futuro
          </h1>
          <p className="text-lg md:text-xl">
            A energia renovável nos oferece um planeta mais saudável e sustentável. Apoie a transição para fontes de energia limpa e ajude a proteger o futuro das próximas gerações.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <div className="bg-white rounded-full p-4 flex items-center justify-center text-green-600 shadow-lg hover:scale-110 transition-transform">
              <FaLeaf size={36} />
            </div>
            <div className="bg-white rounded-full p-4 flex items-center justify-center text-green-600 shadow-lg hover:scale-110 transition-transform">
              <FaSolarPanel size={36} />
            </div>
            <div className="bg-white rounded-full p-4 flex items-center justify-center text-green-600 shadow-lg hover:scale-110 transition-transform">
              <FaWind size={36} />
            </div>
          </div>
        </div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <Image
            src="/images/main.png"
            alt="Energia Verde"
            fill
            style={{ objectFit: 'contain' }}
            className="drop-shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
