import Modal from 'react-modal'
import { useState } from 'react'

import InputClientModal from '../Inputs/InputClientModal'
import FormButton from '../Buttons/FormButton'
import ConfirmModal from "./ConfirmModal"

Modal.setAppElement('#root')

export default function ClientModal({
  ...data  
}) {

  const [inputCorporateName, setInputCorporateName] = useState(data.razao)
  const [inputResponsible, setInputResponsible] = useState(data.responsavel)
  const [inputDdd, setInputDdd] = useState(data.ddd)
  const [inputPhone, setInputPhone] = useState(data.telefone)  
  const [inputAddress, setInputAddress] = useState(data.endereco)
  const [inputCnpj, setInputCnpj] = useState(data.cnpj)
  const [inputStateRegistration, setInputStateRegistration] = useState(data.inscricao_estadual)
  const [inputEmail, setInputEmail] = useState(data.email)
  const [inputCep, setInputCep] = useState(data.cep)
  const [inputState, setInputState] = useState(data.estado)
  const [inputCity, setInputCity] = useState(data.cidade)
  const [inputDistrict, setInputDistrict] = useState(data.bairro)

  const handleChangeCorporateName = (e) => { setInputCorporateName(e.target.value) }
  const handleChangeResponsible = (e) => { setInputResponsible(e.target.value) }
  const handleChangeDdd = (e) => { setInputDdd(e.target.value) }
  const handleChangePhone = (e) => { setInputPhone(e.target.value) }
  const handleChangeAddress = (e) => { setInputAddress(e.target.value) }
  const handleChangeCnpj = (e) => { setInputCnpj(e.target.value) }
  const handleChangeStateRegistration = (e) => { setInputStateRegistration(e.target.value) }
  const handleChangeEmail = (e) => { setInputEmail(e.target.value) }
  const handleChangeCep = (e) => { setInputCep(e.target.value) }
  const handleChangeState = (e) => { setInputState(e.target.value) }
  const handleChangeCity = (e) => { setInputCity(e.target.value) }
  const handleChangeDistrict = (e) => { setInputDistrict(e.target.value) }

  const sendForm = () => {
    console.log(data.action)          
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

  const handleOpenModalConfirm = (e) => {
    e.preventDefault()

    const requiredFields = document.querySelectorAll('input[required]');
    let count = 0

    requiredFields.forEach((required) => {
      if(required.value === ''){
        setiIsOpenConfirm(false)
        required.classList.add('border-red-400')
        count++
      } else {
        required.classList.remove('border-red-400')                  
      }      

      if(count == 0){
        setiIsOpenConfirm(true)
      } else {
        console.log('Há campos obrigatórios a serem preenchidos.')
      }      
    })          
  }

  const handleCloseModalConfirm = () => {
    setiIsOpenConfirm(false)    
  }

  return (             
    <form className="flex flex-col w-full max-w-6xl h-max items-center jusitfy-center bg-white p-5 rounded-sm" id="form">
      <div className="flex flex-row w-full" id="datas">          
        <div className="flex flex-col w-1/2 pr-5 border-r" id="businessData">
          <label className="mb-2" htmlFor={data.id}>Razao:</label>
          <InputClientModal 
            type="text"
            value={inputCorporateName}
            id={data.id}
            onChange={handleChangeCorporateName}
            required
          />

          <label className="mb-2 mt-4" htmlFor={data.id}>Responsavel:</label>
          <InputClientModal 
            type="text"
            value={inputResponsible}
            id={data.id}
            onChange={handleChangeResponsible}            
          />

          <label className="mb-2 mt-4" htmlFor={data.id}>CNPJ:</label>
          <InputClientModal 
            type="text"
            value={inputCnpj}
            id={data.id}
            onChange={handleChangeCnpj}
            required
          />

          <label className="mb-2 mt-4" htmlFor={data.id}>Inscrição Estadual:</label>
          <InputClientModal 
            type="text"
            value={inputStateRegistration}
            id={data.id}
            onChange={handleChangeStateRegistration}            
          />

          <label className="mb-2 mt-4" htmlFor={data.id}>DDD:</label>
          <InputClientModal 
            type="text"
            value={inputDdd}
            id={data.id}
            onChange={handleChangeDdd}            
          />

          <label className="mb-2 mt-4" htmlFor={data.id}>Telefone:</label>
          <InputClientModal 
            type="phone"
            value={inputPhone}
            id={data.id}
            onChange={handleChangePhone}            
          />
        </div>          

        <div className="flex flex-col w-1/2 pl-5" id="personalData">

          <label className="mb-2" htmlFor={data.id}>Email:</label>      
          <InputClientModal 
            type="email"
            value={inputEmail}
            id={data.id}
            onChange={handleChangeEmail}            
          />

          <label className="mb-2 mt-4" htmlFor={data.id}>Endereço:</label>
          <InputClientModal 
            type="text"
            value={inputAddress}
            id={data.id}
            onChange={handleChangeAddress}
            required
          />

          <label className="mb-2 mt-4" htmlFor={data.id}>CEP:</label>
          <InputClientModal 
            type="text"
            value={inputCep}
            id={data.id}
            onChange={handleChangeCep}
            required
          />

          <label className="mb-2 mt-4" htmlFor={data.id}>Estado:</label>
          <InputClientModal 
            type="text"
            value={inputState}
            id={data.id}
            onChange={handleChangeState}
            required
          />
          
          <label className="mb-2 mt-4" htmlFor={data.id}>Cidade:</label>
          <InputClientModal 
            type="text"
            value={inputCity}
            id={data.id}
            onChange={handleChangeCity}
            required
          />
          
          <label className="mb-2 mt-4" htmlFor={data.id}>Bairro:</label>
          <InputClientModal 
            type="text"
            value={inputDistrict}
            id={data.id}
            onChange={handleChangeDistrict}
            required
          />
        </div>
      </div>


      <div className="flex flex-row items-center text-center justify-between w-full mt-10">
        <FormButton
          type="button"
          color="bg-red-400" 
          text="Cancelar"
          onClick={data.close}
        />

        <FormButton
          type="submit" 
          color="bg-green-400"
          text={data.textButton}
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