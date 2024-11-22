import React, { useState } from "react";

function Clientes() {
  const [cliente, setCliente] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    endereco: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSave = () => {
    console.log("Cliente salvo:", cliente);
    // Aqui podemos adicionar a integração com o Supabase (POST para salvar no backend)
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Clientes</h1>
      <div className="bg-white shadow p-4 rounded">
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={cliente.nome}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Digite o nome do cliente"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
            CPF
          </label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={cliente.cpf}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Digite o CPF"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Digite o email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={cliente.telefone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Digite o telefone"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">
            Endereço
          </label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={cliente.endereco}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Digite o endereço"
          />
        </div>
        <button
          onClick={handleSave}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
        >
          Salvar Cliente
        </button>
      </div>
    </div>
  );
}

export default Clientes;
