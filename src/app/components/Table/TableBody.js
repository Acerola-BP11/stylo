import { useState } from 'react'
import Image from 'next/image'

import Modal from 'react-modal'
import ClientModal from '../Modal/ClientModal'

export default function TableBody({
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
  bairro
}) {

  Modal.setAppElement(document.getElementById('root'))

  const [isOpenEdit, setIsOpenEdit] = useState(false)

  const handleOpenModalEditClient = () => {
    setIsOpenEdit(true)    
  }

  const handleCloseModalEditClient = () => {
    setIsOpenEdit(false)    
  }   

  // Confirm Modal
  const customStyles = {
    content: {        
      minWidth: '1152px', 
      height: 'max-content',      
      top: '50%',      
      left: '50%',
      transform: 'translate(-50%, -50%)',                     
    },
  };

  return (
    <tbody id="root">
      <tr>
        <th>
          <input type="checkbox" className="w-5 h-5 cursor-pointer" id={id}/>
        </th>        
        <th className="font-light">{razao}</th>
        <th className="font-light">{cnpj}</th>
        <th className="font-light">{email}</th>
        <th className="font-light">{ddd}</th>
        <th className="font-light">{telefone}</th>
        <th className="font-light">{estado}</th>
        <th className="font-light">{cidade}</th>
        <th className="font-light">{endereco}</th>
        <th className="font-light">{cep}</th>
        <th className="font-light">{bairro}</th>
        <th className="font-light">{responsavel}</th>
        <th className="font-light">{inscricao_estadual}</th>
        
        <th>
          <button className="p-1 mr-5" id="editClient" onClick={handleOpenModalEditClient}>
            <Image 
              src={'/edit-2.svg'}
              width={20}
              height={20}
              alt="Icone de um lápis"              
            />
          </button>
          
          <Modal
            isOpen={isOpenEdit}
            onRequestClose={handleCloseModalEditClient}
            style={customStyles}
          >
            <ClientModal 
              id={id}
              razao={razao}
              responsavel={responsavel}
              ddd={ddd}
              telefone={telefone}
              endereco={endereco}
              cnpj={cnpj}
              inscricao_estadual={inscricao_estadual}
              email={email}
              cep={cep}
              estado={estado}
              cidade={cidade}
              bairro={bairro}
              close={handleCloseModalEditClient}
            />
          </Modal>

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