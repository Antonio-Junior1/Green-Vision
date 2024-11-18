"use client";

const developers = [
  {
    name: 'Antonio Junior',
    rm: '554518',
    email: 'AntonioJunior@Gmail.com',
    github: 'https://github.com/Antonio-Junior1',
    instagram: 'https://www.instagram.com/jrz__7/',
    image: '/IMAGES/Antonio.jpeg',
  },
  {
    name: 'Carlos Eduardo',
    rm: '555223',
    email: 'CarlosEduardo@Gmail.com',
    github: 'https://github.com/CarlosCampos84',
    instagram: 'https://www.instagram.com/c4duzin_n/',
    image: '/IMAGES/Cadu.jpeg',
  },
  {
    name: 'Felipe Pizzinato',
    rm: '555141',
    email: 'FelipePizzinato@Gmail.com',
    github: 'https://github.com/felipepizzinato',
    instagram: 'https://www.instagram.com/_pizzinato/',
    image: '/IMAGES/Felipe.jpeg',
  },
];
interface DeveloperProps {
  name: string;
  rm: string;
  email: string;
  github: string;
  instagram: string;
  image: string;
}

export default function DeveloperCard({
  name,
  rm,
  email,
  github,
  instagram,
  image,
}: DeveloperProps) {
  return (
    <div className="flex flex-col items-center bg-white p-12 rounded-lg shadow-lg w-80">
      <img src={image} alt={`Foto de ${name}`} className="w-full h-52 object-cover rounded-t-lg" />
      <h3 className="text-black text-xl font-bold mt-3">{name}</h3>
      <p className="text-gray-600">RM: {rm}</p>
      <p className="text-gray-600">{email}</p>
      <div className="flex mt-3">
        {github && (
          <a
            href={github}
            className="mr-2 text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        <a
          href={instagram}
          className="text-pink-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </div>



  );
}
