"use client"
import { useState } from "react";

export default function Energia() {
  const [contador, setContador] = useState(100);

  function descarregar() {
    setContador(contador - 10);
  }

  function recarregar() {
    setContador(100);
  }

  return (
    <div className="w-80 h-60 bg-gray-800 p-4 rounded-xl border border-gray-600 text-center">
      <h2 className="bg-gray-700 text-white p-2 rounded-lg">Energia Atual</h2>
      <p
        className={`text-lg font-bold ${
          contador > 55
            ? "text-green-400"
            : contador > 30
            ? "text-orange-400"
            : "text-red-500"
        }`}
      >
        Bateria em: {contador}%
      </p>
      <div className="flex justify-between mt-4">
        <button
          onClick={descarregar}
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
        >
          Descarregar
        </button>
        <button
          onClick={recarregar}
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
        >
          Recarregar
        </button>
      </div>
    </div>
  );
}
