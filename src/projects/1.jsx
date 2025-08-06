import { useRef, useState } from 'react'
import { Plus } from 'lucide-react'
import { HeaderHub } from "../components/Header.jsx";

export function SomaInput() {
  const [res, setRes] = useState(0)
  const [valor1, setNumero1] = useState(0)
  const valor2 = useRef(null)

  function soma() {
    const v1 = Number(valor1)
    const v2 = Number(valor2.current.value)
    setRes(v1 + v2)
  }

  return (
    <>
    <HeaderHub />

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">

      <div className="flex gap-4 mb-4">
        <input
          type="number"
          onChange={(e) => setNumero1(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          ref={valor2}
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={soma}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        <Plus size={18} /> Somar
      </button>

      <p className="mt-4 text-lg font-semibold text-gray-700">
        {res ? `${res}` : 'Soma aí, caba!'}
      </p>
    </div>
    </>
  )
}