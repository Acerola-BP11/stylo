import { useState } from 'react'
import Modal from 'react-modal'
import Image from 'next/image'

import ClientModal from '../Modal/ClientModal'

Modal.setAppElement('#root')

export default function TableBody({
  ...data
}) {

  const [isOpenEdit, setIsOpenEdit] = useState(false)

  const handleOpenModalEditClient = () => { setIsOpenEdit(true) }
  const handleCloseModalEditClient = () => { setIsOpenEdit(false) }   

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
          <input type="checkbox" className="w-5 h-5 cursor-pointer" id={data.id}/>
        </th>        
        <th className="font-light">{data.razao}</th>
        <th className="font-light">{data.cnpj}</th>
        <th className="font-light">{data.email}</th>
        <th className="font-light">{data.ddd}</th>
        <th className="font-light">{data.telefone}</th>
        <th className="font-light">{data.estado}</th>
        <th className="font-light">{data.cidade}</th>
        <th className="font-light">{data.endereco}</th>
        <th className="font-light">{data.cep}</th>
        <th className="font-light">{data.bairro}</th>
        <th className="font-light">{data.responsavel}</th>
        <th className="font-light">{data.inscricao_estadual}</th>
        
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
              id={data.id}
              razao={data.razao}
              responsavel={data.responsavel}
              ddd={data.ddd}
              telefone={data.telefone}
              endereco={data.endereco}
              cnpj={data.cnpj}
              inscricao_estadual={data.inscricao_estadual}
              email={data.email}
              cep={data.cep}
              estado={data.estado}
              cidade={data.cidade}
              bairro={data.bairro}
              close={handleCloseModalEditClient}
              textButton={'Editar'}
              action={'update'}
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