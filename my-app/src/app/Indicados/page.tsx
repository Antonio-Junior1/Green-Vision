"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// Definindo a interface TipoIndicado de acordo com a resposta da API
interface TipoIndicado {
    idIndicado: number; // Alterado para idIndicado
    nome: string;
    email: string;
    relacao: string; // Relação com a pessoa indicada (ex: amigo, colega, etc.)
}

export default function IndicarPessoa() {
    const [mensagemCadastro, setMensagemCadastro] = useState('');
    const [loading, setLoading] = useState(false);
    const [indicado, setIndicado] = useState<TipoIndicado>({
        idIndicado: 0,
        nome: "",
        email: "",
        relacao: "",
    });
    const [indicados, setIndicados] = useState<TipoIndicado[]>([]);
    const [modoEdicao, setModoEdicao] = useState<number | null>(null);

    useEffect(() => {
        const fetchIndicados = async () => {
            try {
                const response = await fetch('http://localhost:8080/indicados');
                if (!response.ok) {
                    throw new Error('Erro ao buscar indicações');
                }
                const data: TipoIndicado[] = await response.json();
                setIndicados(data);
            } catch (error) {
                console.error('Erro ao buscar indicações:', error);
            }
        };

        fetchIndicados();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = modoEdicao ? `http://localhost:8080/indicados/${modoEdicao}` : "http://localhost:8080/indicados";
            const method = modoEdicao ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(indicado),
            });

            if (response.ok) {
                setMensagemCadastro(modoEdicao ? "Indicação atualizada com sucesso!" : "Pessoa indicada com sucesso!");
                setIndicado({ idIndicado: 0, nome: "", email: "", relacao: "" });
                setModoEdicao(null);
                const updatedIndicados = await (await fetch('http://localhost:8080/indicados')).json();
                setIndicados(updatedIndicados);
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

    const handleDelete = async (idIndicado: number) => {
        try {
            const response = await fetch(`http://localhost:8080/indicados/${idIndicado}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setIndicados(indicados.filter((c) => c.idIndicado !== idIndicado));
                setMensagemCadastro("Indicação excluída com sucesso!");
            } else {
                throw new Error('Erro ao excluir a indicação');
            }
        } catch (error) {
            console.error('Erro ao excluir indicação:', error);
            setMensagemCadastro('Erro ao excluir indicação. Tente novamente.');
        }
    };

    const iniciarEdicao = (indicado: TipoIndicado) => {
        setIndicado(indicado);
        setModoEdicao(indicado.idIndicado);
        window.scrollTo(0, 0);
    };

    return (
        <div className='bg-black'>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-700 bg-[#009688]">
                <section className="bg-white flex flex-col items-center p-10 rounded-lg shadow-lg w-80 transition-all duration-300 text-black">
                    <h2 className="text-2xl font-bold mb-5">{modoEdicao ? 'Editar Indicação' : 'Indicar Pessoa'}</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-3">
                        <input
                            type="text"
                            placeholder="Nome do Indicado"
                            value={indicado.nome}
                            onChange={(e) => setIndicado({ ...indicado, nome: e.target.value })}
                            required
                            className="p-2 border rounded-md focus:outline-none focus:border-green-500"
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={indicado.email}
                            onChange={(e) => setIndicado({ ...indicado, email: e.target.value })}
                            required
                            className="p-2 border rounded-md focus:outline-none focus:border-green-500"
                        />
                        <input
                            type="text"
                            placeholder="Relação (ex: amigo, colega, etc.)"
                            value={indicado.relacao}
                            onChange={(e) => setIndicado({ ...indicado, relacao: e.target.value })}
                            required
                            className="p-2 border rounded-md focus:outline-none focus:border-green-500"
                        />
                        <button
                            type="submit"
                            className="w-full p-2 bg-green-600 text-white rounded-md mt-3 hover:bg-green-500 transition"
                            disabled={loading}
                        >
                            {loading ? 'Processando...' : modoEdicao ? 'Atualizar' : 'Indicar'}
                        </button>
                        {modoEdicao && (
                            <button
                                type="button"
                                onClick={() => {
                                    setModoEdicao(null);
                                    setIndicado({ idIndicado: 0, nome: "", email: "", relacao: "" });
                                }}
                                className="w-full p-2 bg-gray-500 text-white rounded-md mt-2 hover:bg-gray-600 transition"
                            >
                                Cancelar
                            </button>
                        )}
                    </form>
                    <Link href="/login" className="w-full p-2 bg-[#009688] text-white rounded-md mt-4 text-center hover:bg-green-600 transition">
                        Voltar ao Login
                    </Link>
                    <p className={`mt-4 text-sm ${mensagemCadastro.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                        {mensagemCadastro}
                    </p>
                </section>
            </div>
            <div className="mt-10 bg-black max-w-6xl mx-auto py-10 px-5">
                <h2 className="text-3xl font-bold mb-5 text-center text-white">Gerenciamento de Indicações</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {indicados.map((dev) => (
                        <div key={dev.idIndicado} className="bg-white p-5 rounded-lg shadow-lg text-black">
                            <h3 className="font-bold">{dev.nome}</h3>
                            <p>Email: {dev.email}</p>
                            <p>Relação: {dev.relacao}</p>
                            <div className="flex justify-between mt-5">
                                <button
                                    onClick={() => iniciarEdicao(dev)}
                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(dev.idIndicado)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
