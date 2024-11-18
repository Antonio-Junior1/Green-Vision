"use client";


import React, { useState, useEffect } from 'react';
import { FaHandPointRight } from 'react-icons/fa'; // Ícone de destaque para chamar a atenção

// Definindo a interface TipoIndicado de acordo com a resposta da API
interface TipoIndicado {
    idIndicado: number;
    nome: string;
    email: string;
    relacao: string;
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
                setMensagemCadastro(modoEdicao ? "Indicação atualizada com sucesso!" : "Obrigado! Pessoa indicada com sucesso!");
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
        <div className='min-h-screen bg-gradient-to-b from-green-600 to-green-800 p-6 flex flex-col items-center'>
            <div className="bg-white p-10 rounded-lg shadow-2xl max-w-lg w-full text-center">
                <div className="flex justify-center items-center mb-4">
                    <FaHandPointRight className="text-yellow-500 text-4xl mr-2" />
                    <h2 className="text-3xl font-bold text-green-800">Indique e Faça a Diferença!</h2>
                </div>
                <p className="text-gray-700 mb-6">
                    Convide seus amigos, colegas ou familiares para conhecerem mais sobre energia verde e se unirem ao movimento por um futuro sustentável. Juntos, podemos fazer a diferença!
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Nome do Indicado"
                        value={indicado.nome}
                        onChange={(e) => setIndicado({ ...indicado, nome: e.target.value })}
                        required
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <input
                        type="email"
                        placeholder="E-mail do Indicado"
                        value={indicado.email}
                        onChange={(e) => setIndicado({ ...indicado, email: e.target.value })}
                        required
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <input
                        type="text"
                        placeholder="Relação (ex: amigo, colega, etc.)"
                        value={indicado.relacao}
                        onChange={(e) => setIndicado({ ...indicado, relacao: e.target.value })}
                        required
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <button
                        type="submit"
                        className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition transform hover:scale-105"
                        disabled={loading}
                    >
                        {loading ? 'Enviando...' : modoEdicao ? 'Atualizar Indicação' : 'Indicar Agora'}
                    </button>
                    {modoEdicao && (
                        <button
                            type="button"
                            onClick={() => {
                                setModoEdicao(null);
                                setIndicado({ idIndicado: 0, nome: "", email: "", relacao: "" });
                            }}
                            className="w-full p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                        >
                            Cancelar
                        </button>
                    )}
                </form>
                <p className={`mt-4 text-sm ${mensagemCadastro.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                    {mensagemCadastro}
                </p>
            </div>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl">
                <h2 className="text-2xl font-bold mb-4 text-center text-green-800">Indicações Recentes</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {indicados.map((dev) => (
                        <div key={dev.idIndicado} className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-xs">
                            <h3 className="font-bold text-green-800">{dev.nome}</h3>
                            <p>Email: {dev.email}</p>
                            <p>Relação: {dev.relacao}</p>
                            <div className="flex justify-between mt-4">
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
