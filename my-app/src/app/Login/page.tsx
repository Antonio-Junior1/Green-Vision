"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface Usuario {
  usuario: string;
  senha: string;
}

const Login = () => {
  const [mensagem, setMensagem] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const router = useRouter();

  useEffect(() => {
    const user = sessionStorage.getItem("usuario");
    if (user) {
      router.push("/");
    }

    const chamadaApi = async () => {
      try {
        const response = await fetch('http://localhost:8080/usuario');
        if (!response.ok) {
          throw new Error('Erro ao buscar usuários');
        }
        const data: Usuario[] = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Falha na listagem", error);
      }
    };

    chamadaApi();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usuarioEncontrado = usuarios.find(user => user.usuario === nomeUsuario);

    if (usuarioEncontrado && usuarioEncontrado.senha === senha) {
      sessionStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
      setMensagem("Login bem-sucedido!");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      setMensagem("Nome de usuário ou senha inválidos.");
      setTimeout(() => {
        setMensagem('');
      }, 3000);
    }
  };

  return (
    <div className='bg-gradient-to-b from-green-900 to-green-800 min-h-screen'>
      <div className="flex items-center justify-center min-h-screen">
        <section className="bg-green-700 flex flex-col items-center p-10 rounded-lg shadow-lg w-80 transition-all duration-300 text-white">
          <h2 className="text-2xl font-bold mb-5">Bem-vindo!</h2>
          <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-3">
            <input
              type="text"
              id="idNmUsu"
              name="nm_usuario"
              placeholder="Nome de usuário"
              required
              value={nomeUsuario}
              onChange={(e) => setNomeUsuario(e.target.value)}
              className="p-2 border rounded-md focus:outline-none focus:border-yellow-500 text-black"
              autoComplete="off"
            />

            <input
              type="password"
              id="idSenha"
              name="senha"
              placeholder="Senha"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="p-2 border rounded-md focus:outline-none focus:border-yellow-500 text-black"
              autoComplete="off"
            />

            <button type="submit" className="w-full p-2 bg-yellow-500 text-black rounded-md mt-3 hover:bg-yellow-400 transition">
              Entrar
            </button>
            <p className="mt-4 text-center">
              Não tem uma conta? <Link href="/Cadastro" className="text-yellow-300 hover:underline">Cadastre-se</Link>
            </p>
          </form>
          <p className={`mt-4 text-sm ${mensagem.includes('sucesso') ? 'text-yellow-300' : 'text-red-400'}`}>
            {mensagem}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Login;
