"use client"
import { useState } from "react";

export default function Comunicador() {
  const [mensagem, setMensagem] = useState("");
  const [historico, setHistorico] = useState<string[]>([]);

  function handleChange(e) {
    setMensagem(e.target.value);
  }

  function enviarMensagem(e) {
    if (e.key === "Enter" && mensagem.trim() !== "") {
      setHistorico([...historico, mensagem]);
      setMensagem("");
    }
  }

  return (
    <div className="w-80 h-60 bg-gray-800 p-4 rounded-xl border border-gray-600 text-center">
      <h2 className="bg-gray-700 text-white p-2 rounded-lg">Comunicador</h2>
      
      <label className="block text-white text-left mt-2">Digite a mensagem:</label>
      <input
        type="text"
        value={mensagem}
        onChange={handleChange}
        onKeyDown={enviarMensagem}
        className="bg-white text-black p-2 w-full mt-1 rounded-md"
        placeholder="Digite aqui..."
      />
      
      <div className="bg-blue-900 text-white p-2 rounded-lg mt-4">
        <p>Mensagens anteriores:</p>
        <ul className="mt-2">
          {historico.map((msg, index) => (
            <li key={index} className="bg-yellow-800 text-black p-2 rounded-md mt-1">
              {msg}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
