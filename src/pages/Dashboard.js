import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Clientes", path: "/clientes" },
    { label: "Produtos", path: "/produtos" },
    { label: "Pedidos", path: "/pedidos" },
    { label: "Relatórios", path: "/relatorios" },
    { label: "Configurações", path: "/configuracoes" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Painel Principal</h1>
      </header>
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Bem-vindo! Escolha uma opção:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="p-4 bg-white shadow rounded hover:bg-indigo-50 border border-gray-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
