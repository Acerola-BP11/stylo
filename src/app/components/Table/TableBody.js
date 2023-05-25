'use client'

import { useState } from 'react'
import Image from 'next/image'

import ClientModal from '../Modal/ClientModal'

export default function TableBody({
  id,
  name,
  email,
  address,
  phone
}) {

  const [isOpenEdit, setIsOpenEdit] = useState(false)

  const handleOpenModalEditClient = () => {
    setIsOpenEdit(true)
  }

  const handleCloseModalEditClient = () => {
    setIsOpenEdit(false)
  }

  return (
    <tbody>
      <tr>
        <th>
          <input type="checkbox" className="w-5 h-5 cursor-pointer"/>
        </th>        
        <th className="font-light">{name}</th>
        <th className="font-light">{email}</th>
        <th className="font-light">{address}</th>
        <th className="font-light">{phone}</th>
        
        <th>
          <button className="p-1 mr-5" id="editClient" onClick={handleOpenModalEditClient}>
            <Image 
              src={'/edit-2.svg'}
              width={20}
              height={20}
              alt="Icone de um lápis"              
            />
          </button>
          
          {isOpenEdit && (
            <ClientModal 
              id={id}
              name={name}
              email={email}
              address={address}
              phone={phone}
            />
          )}

          <button className="p-1">
            <Image 
              src={'/trash-2.svg'}
              width={20}
              height={20}
              alt="Icone de uma lixeira"              
            />
          </button>
        </th>        
      </tr>
    </tbody>
  )
}