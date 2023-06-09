'use client'

import { useState } from "react"

export default function TableHead() {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked)             
  }  

  return (
    <thead>
      <tr>            
        <th>
          <input 
            type="checkbox" 
            className="w-5 h-5 cursor-pointer" 
            onChange={handleCheckboxChange} 
          />
        </th>  
        <th className="text-blue-400">Razao</th>
        <th className="text-blue-400">Responsavel</th>
        <th className="text-blue-400">DDD</th>
        <th className="text-blue-400">Telefone</th>
        <th className="text-blue-400">Endereço</th>
        <th className="text-blue-400">CNPJ</th>
        <th className="text-blue-400">Insc. Estadual</th>
        <th className="text-blue-400">Email</th>
        <th className="text-blue-400">CEP</th>
        <th className="text-blue-400">Estado</th>
        <th className="text-blue-400">Cidade</th>
        <th className="text-blue-400">Bairro</th>
        <th className="text-blue-400">Ações</th>
      </tr>
    </thead>
  )  
}
