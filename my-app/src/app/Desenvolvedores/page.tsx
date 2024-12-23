"use client";

const developers = [
  {
    name: 'Antonio Junior',
    rm: '554518',
    email: 'AntonioJunior@Gmail.com',
    github: 'https://github.com/Antonio-Junior1',
    linkedin: 'https://www.linkedin.com/in/antoniojr1/', 
    image: '/images/Antonio.jpeg',
    turma: 'Turma:1TDSPJ-2024',
  },
  {
    name: 'Carlos Eduardo',
    rm: '555223',
    email: 'CarlosEduardo@Gmail.com',
    github: 'https://github.com/CarlosCampos84',
    linkedin: 'https://www.linkedin.com/in/carlos-eduardo-campos-ba87b8302', 
    image: '/images/Cadu.jpeg',
    turma: 'Turma:1TDSPJ-2024',
  },
  {
    name: 'Gustavo Souza',
    rm: '556999',
    email: 'GustavoSouza@Gmail.com',
    github: 'https://github.com/gustavoamorim12',
    linkedin: 'https://www.linkedin.com/in/gustavo-souza-14b100238/', 
    image: '/images/gusta.jpeg',
    turma: 'Turma:1TDSPW-2024',
  },
];

interface DeveloperProps {
  name: string;
  rm: string;
  email: string;
  github: string;
  linkedin: string; 
  image: string;
  turma: string;
}

function DeveloperCard({
  name,
  rm,
  email,
  github,
  linkedin,
  image,
  turma,
}: DeveloperProps) {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-80">
      <div className="w-full h-72 overflow-hidden">
        <img 
          src={image} 
          alt={`Foto de ${name}`} 
          className="w-full h-full object-cover rounded-t-lg" 
        />
      </div>
      <h3 className="text-black text-xl font-bold mt-3">{name}</h3>
      <p className="text-gray-600">RM: {rm}</p>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{turma}</p>
      <div className="flex mt-3 space-x-2">
        {github && (
          <a
            href={github}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        <a
          href={linkedin}
          className="text-blue-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default function DevelopersList() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
      {developers.map((developer) => (
        <DeveloperCard
          key={developer.rm}
          name={developer.name}
          rm={developer.rm}
          email={developer.email}
          github={developer.github}
          linkedin={developer.linkedin}
          image={developer.image}
          turma={developer.turma}
        />
      ))}
    </div>
  );
}
