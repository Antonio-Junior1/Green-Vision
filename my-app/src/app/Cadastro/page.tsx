"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // 

interface TipoCadastro {
    usuario: string;
    nome: string;
    email: string;
    senha: string;
}

export default function Cadastro() {
    const router = useRouter();
    const [mensagemCadastro, setMensagemCadastro] = useState('');
    const [loading, setLoading] = useState(false);
    const [cadastro, setCadastro] = useState<TipoCadastro>({
        usuario: "",
        nome: "",
        email: "",
        senha: "",
    });
    const [cadastros, setCadastros] = useState<TipoCadastro[]>([]);
    const [modoEdicao, setModoEdicao] = useState<string | null>(null);

    useEffect(() => {
        const fetchCadastros = async () => {
            try {
                const response = await fetch('http://localhost:8080/usuario');
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados');
                }
                const data: TipoCadastro[] = await response.json();
                setCadastros(data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchCadastros();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = modoEdicao ? `http://localhost:8080/usuario/${modoEdicao}` : "http://localhost:8080/usuario";
            const method = modoEdicao ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cadastro),
            });

            if (response.ok) {
                setMensagemCadastro(modoEdicao ? "Dados atualizados com sucesso!" : "Usuário cadastrado com sucesso!");
                setCadastro({ usuario: "", nome: "", email: "", senha: "" });
                setModoEdicao(null);
                const updatedCadastros = await (await fetch('http://localhost:8080/usuario')).json();
                setCadastros(updatedCadastros);

                if (!modoEdicao) {
                    setTimeout(() => {
                        router.push("/login");
                    }, 2000);
                }
            } else {
                const responseText = await response.text();
                const errorText = responseText ? JSON.parse(responseText) : {};
                setMensagemCadastro(`Erro: ${errorText.message || 'Erro desconhecido.'}`);
            }
        } catch (error) {
            console.error("Erro:", error);
            setMensagemCadastro(`Erro: ${error instanceof Error ? error.message : 'Erro desconhecido.'}`);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (usuario: string) => {
        try {
            const response = await fetch(`http://localhost:8080/usuario/${usuario}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setCadastros(cadastros.filter((c) => c.usuario !== usuario));
                setMensagemCadastro("Dados excluídos com sucesso!");
            } else {
                throw new Error('Erro ao excluir os dados');
            }
        } catch (error) {
            console.error('Erro ao excluir dados:', error);
            setMensagemCadastro('Erro ao excluir dados. Tente novamente.');
        }
    };

    const iniciarEdicao = (cadastro: TipoCadastro) => {
        setCadastro(cadastro);
        setModoEdicao(cadastro.usuario);
        window.scrollTo(0, 0);
    };

    return (
        <div className='bg-gradient-to-b from-green-900 to-green-800 min-h-screen'>
            <div className="flex items-center justify-center min-h-screen">
                <section className="bg-green-700 flex flex-col items-center p-10 rounded-lg shadow-lg w-80 transition-all duration-300 text-white">
                    <h2 className="text-2xl font-bold mb-5">{modoEdicao ? 'Editar Dados' : 'Cadastro'}</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-3">
                        <input
                            type="text"
                            placeholder="Nome Completo"
                            value={cadastro.nome}
                            onChange={(e) => setCadastro({ ...cadastro, nome: e.target.value })}
                            required
                            className="p-2 border rounded-md focus:outline-none focus:border-yellow-500 text-black"
                        />
                        <input
                            type="text"
                            placeholder="Nome de Usuário"
                            value={cadastro.usuario}
                            onChange={(e) => setCadastro({ ...cadastro, usuario: e.target.value })}
                            required
                            className="p-2 border rounded-md focus:outline-none focus:border-yellow-500 text-black"
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={cadastro.email}
                            onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })}
                            required
                            className="p-2 border rounded-md focus:outline-none focus:border-yellow-500 text-black"
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={cadastro.senha}
                            onChange={(e) => setCadastro({ ...cadastro, senha: e.target.value })}
                            required
                            className="p-2 border rounded-md focus:outline-none focus:border-yellow-500 text-black"
                        />
                        <button
                            type="submit"
                            className="w-full p-2 bg-yellow-500 text-black rounded-md mt-3 hover:bg-yellow-400 transition"
                            disabled={loading}
                        >
                            {loading ? 'Processando...' : modoEdicao ? 'Atualizar' : 'Cadastrar'}
                        </button>
                        {modoEdicao && (
                            <button
                                type="button"
                                onClick={() => {
                                    setModoEdicao(null);
                                    setCadastro({ usuario: "", nome: "", email: "", senha: "" });
                                }}
                                className="w-full p-2 bg-gray-600 text-white rounded-md mt-2 hover:bg-gray-700 transition"
                            >
                                Cancelar
                            </button>
                        )}
                    </form>
                    <Link href="/Login" className="w-full p-2 bg-green-800 text-white rounded-md mt-4 text-center hover:bg-green-700 transition">
                        Voltar ao Login
                    </Link>
                    <p className={`mt-4 text-sm ${mensagemCadastro.includes('sucesso') ? 'text-yellow-300' : 'text-red-400'}`}>
                        {mensagemCadastro}
                    </p>
                </section>
            </div>
            <div className="mt-10 bg-green-800 max-w-6xl mx-auto py-10 px-5 rounded-lg shadow-2xl">
                <h2 className="text-3xl font-bold mb-5 text-center text-white">Gerenciamento de Dados</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {cadastros.map((dev) => (
                        <div key={dev.usuario} className="bg-white p-6 border-2 border-green-500 rounded-lg shadow-md w-full max-w-xs text-gray-800 hover:shadow-lg transition">
                            <h3 className="font-bold text-green-800">{dev.nome}</h3>
                            <p>Email: {dev.email}</p>
                            <div className="flex justify-between mt-4">
                                <button
                                    className="flex items-center bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                                    onClick={() => iniciarEdicao(dev)}
                                >
                                    <FaEdit className="mr-2" /> Editar
                                </button>
                                <button
                                    className="flex items-center bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                    onClick={() => handleDelete(dev.usuario)}
                                >
                                    <FaTrash className="mr-2" /> Excluir
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
