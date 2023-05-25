import InputClientModal from '../Inputs/InputClientModal'
import FormButton from '../Buttons/FormButton'
import { useState } from 'react'

export default function ClientModal({
  id,
  name,
  email,
  address,
  phone,
  close  
}) {
  
  const [inputName, setInputName] = useState(name)
  const [inputEmail, setInputEmail] = useState(email)
  const [inputAddress, setInputAddress] = useState(address)
  const [inputPhone, setInputPhone] = useState(phone)  

  const handleChangeName = (e) => {
    setInputName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setInputEmail(e.target.value)
  }

  const handleChangeAddress = (e) => {
    setInputAddress(e.target.value)
  }

  const handleChangePhone = (e) => {
    setInputPhone(e.target.value)
  }

  const sendForm = (e) => {
    console.log('formulario enviado')
  }

  return (    
    <div className="flex items-center justify-center bg-[var(--background-opacity-modal)] inset-0 fixed">
      <form className="flex flex-col w-96 bg-white p-5 rounded-sm">
        <label className="mb-2 mt-4" htmlFor={id}>Nome:</label>
        <InputClientModal 
          type="text"
          value={inputName}
          id={id}
          onChange={handleChangeName}
        />

        <label className="mb-2 mt-4" htmlFor={id}>Email:</label>      
        <InputClientModal 
          type="email"
          value={inputEmail}
          id={id}
          onChange={handleChangeEmail}
        />

        <label className="mb-2 mt-4" htmlFor={id}>Endereço:</label>
        <InputClientModal 
          type="text"
          value={inputAddress}
          id={id}
          onChange={handleChangeAddress}
        />

        <label className="mb-2 mt-4" htmlFor={id}>Telefone:</label>
        <InputClientModal 
          type="phone"
          value={inputPhone}
          id={id}
          onChange={handleChangePhone}
        />
        
        <div className="flex flex-row items-center text-center justify-between w-full mt-10">
          <FormButton
            type="button"
            color="bg-red-400" 
            text="Cancelar"
            onClick={close}
          />

          <FormButton
            type="submit" 
            color="bg-green-400"
            text="Editar"
            onClick={sendForm}
          />
        </div>

      </form>
    </div>
  )
}