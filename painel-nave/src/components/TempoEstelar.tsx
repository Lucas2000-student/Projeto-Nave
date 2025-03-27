"use client"
import { useEffect, useState } from "react";

export default function TempoEstelar() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(atualizarHora, 1000);
    return () => clearInterval(intervalo);
  }, []);

  function atualizarHora() {
    const novaHora = new Date().toLocaleTimeString();
    setHora(novaHora);
  }

  return (
    <div className="w-80 h-60 bg-gray-800 p-4 rounded-xl border border-gray-600 text-center">
      <h2 className="bg-gray-700 text-white p-2 rounded-lg">Hora atual na Terra</h2>
      <p className="bg-black text-green-400 font-mono text-4xl px-4 py-2 mt-2">{hora}</p>
      <p className="text-gray-400 text-sm">Brasília</p>
    </div>
  );
}
