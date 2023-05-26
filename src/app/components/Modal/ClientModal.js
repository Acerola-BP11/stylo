import InputClientModal from '../Inputs/InputClientModal'
import FormButton from '../Buttons/FormButton'

import Modal from 'react-modal'
import Image from 'next/image'

import { useState } from 'react'
import ConfirmModal from "./ConfirmModal"

export default function ClientModal({
  id,
  razao,
  responsavel,
  ddd,
  telefone,
  endereco,
  cnpj,
  inscricao_estadual,
  email,
  cep,
  estado,
  cidade,
  bairro,
  close  
}) {
  
  Modal.setAppElement(document.getElementById('form'));

  const [inputCorporateName, setInputCorporateName] = useState(razao)
  const [inputResponsible, setInputResponsible] = useState(responsavel)
  const [inputDdd, setInputDdd] = useState(ddd)
  const [inputPhone, setInputPhone] = useState(telefone)  
  const [inputAddress, setInputAddress] = useState(endereco)
  const [inputCnpj, setInputCnpj] = useState(cnpj)
  const [inputStateRegistration, setInputStateRegistration] = useState(inscricao_estadual)
  const [inputEmail, setInputEmail] = useState(email)
  const [inputCep, setInputCep] = useState(cep)
  const [inputState, setInputState] = useState(estado)
  const [inputCity, setInputCity] = useState(cidade)
  const [inputDistrict, setInputDistrict] = useState(bairro)

  const handleChangeCorporateName = (e) => {
    setInputCorporateName(e.target.value)
  }

  const handleChangeResponsible = (e) => {
    setInputResponsible(e.target.value)
  }

  const handleChangeDdd = (e) => {
    setInputDdd(e.target.value)
  }
  
  const handleChangePhone = (e) => {
    setInputPhone(e.target.value)
  }

  const handleChangeAddress = (e) => {
    setInputAddress(e.target.value)
  }

  const handleChangeCnpj = (e) => {
    setInputCnpj(e.target.value)
  }

  const handleChangeStateRegistration = (e) => {
    setInputStateRegistration(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setInputEmail(e.target.value)
  }

  const handleChangeCep = (e) => {
    setInputCep(e.target.value)
  }

  const handleChangeState = (e) => {
    setInputState(e.target.value)
  }

  const handleChangeCity = (e) => {
    setInputCity(e.target.value)
  }

  const handleChangeDistrict = (e) => {
    setInputDistrict(e.target.value)
  }

  const sendForm = () => {
    console.log('envia o form');            
  }

  // Confirm Modal
  const customStyles = {
    content: {  
      width: '300px',    
      height: 'max-content',
      top: '50%',
      left: '50%',            
      transform: 'translate(-50%, -50%)',
    },
  };

  const [isOpenConfirm, setiIsOpenConfirm] = useState(false)

  const handleOpenModalConfirm = () => {
    setiIsOpenConfirm(true)      
  }

  const handleCloseModalConfirm = () => {
    setiIsOpenConfirm(false)    
  }

  return (             
    <form className="flex flex-col w-full max-w-6xl h-max items-center jusitfy-center bg-white p-5 rounded-sm" id="form">
      <div className="flex flex-row w-full" id="datas">          
        <div className="flex flex-col w-1/2 pr-5 border-r" id="businessData">
          <label className="mb-2" htmlFor={id}>Razao:</label>
          <InputClientModal 
            type="text"
            value={inputCorporateName}
            id={id}
            onChange={handleChangeCorporateName}
          />

          <label className="mb-2 mt-4" htmlFor={id}>Responsavel:</label>
          <InputClientModal 
            type="text"
            value={inputResponsible}
            id={id}
            onChange={handleChangeResponsible}
          />

          <label className="mb-2 mt-4" htmlFor={id}>CNPJ:</label>
          <InputClientModal 
            type="text"
            value={inputCnpj}
            id={id}
            onChange={handleChangeCnpj}
          />

          <label className="mb-2 mt-4" htmlFor={id}>Inscrição Estadual:</label>
          <InputClientModal 
            type="text"
            value={inputStateRegistration}
            id={id}
            onChange={handleChangeStateRegistration}
          />

          <label className="mb-2 mt-4" htmlFor={id}>DDD:</label>
          <InputClientModal 
            type="text"
            value={inputDdd}
            id={id}
            onChange={handleChangeDdd}
          />

          <label className="mb-2 mt-4" htmlFor={id}>Telefone:</label>
          <InputClientModal 
            type="phone"
            value={inputPhone}
            id={id}
            onChange={handleChangePhone}
          />
        </div>          

        <div className="flex flex-col w-1/2 pl-5" id="personalData">

          <label className="mb-2" htmlFor={id}>Email:</label>      
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

          <label className="mb-2 mt-4" htmlFor={id}>CEP:</label>
          <InputClientModal 
            type="text"
            value={inputCep}
            id={id}
            onChange={handleChangeCep}
          />

          <label className="mb-2 mt-4" htmlFor={id}>Estado:</label>
          <InputClientModal 
            type="text"
            value={inputState}
            id={id}
            onChange={handleChangeState}
          />
          
          <label className="mb-2 mt-4" htmlFor={id}>Cidade:</label>
          <InputClientModal 
            type="text"
            value={inputCity}
            id={id}
            onChange={handleChangeCity}
          />
          
          <label className="mb-2 mt-4" htmlFor={id}>Bairro:</label>
          <InputClientModal 
            type="text"
            value={inputDistrict}
            id={id}
            onChange={handleChangeDistrict}
          />
        </div>
      </div>


      <div className="flex flex-row items-center text-center justify-between w-full mt-10">
        <FormButton
          type="button"
          color="bg-red-400" 
          text="Cancelar"
          onClick={close}
        />

        <FormButton
          type="button" 
          color="bg-green-400"
          text="Editar"
          onClick={handleOpenModalConfirm}
        />
      </div>
    
      <Modal 
        isOpen={isOpenConfirm}        
        onRequestClose={handleCloseModalConfirm}
        style={customStyles}
        contentLabel="Confirma"
      >
        <ConfirmModal 
          yes={sendForm}
          no={handleCloseModalConfirm}
        />
      </Modal>
    </form>
  )
}