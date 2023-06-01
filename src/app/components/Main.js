import { useState } from "react"
import Modal from 'react-modal'

import TableFooter from './Table/TableFooter'
import TableBody from './Table/TableBody'
import TableActions from './Table/TableActions'
import ClientModal from './Modal/ClientModal'
import ConfirmModal from './Modal/ConfirmModal'

import clients from '../js/clients.json'

Modal.setAppElement('#root')

export default function Main() {  
  
  const [isAllChecked, setIsAllChecked] = useState(false)
  const [isOpenConfirm, setiIsOpenConfirm] = useState(false)
  const [isOpenAdd, setIsOpenAdd] = useState(false)

  const handleCheckboxChange = () => { 
    setIsAllChecked(!isAllChecked)  
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = isAllChecked;
    });
  }  

  const handleDeleteItems = () => {   
    console.log('delete') 
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');            

    checkboxes.forEach((checkbox) => {      
      console.log(checkbox.id)
      // Já esta pegando o ID, agora é só usar esse ID para deletar no banco
      //...      
    });    
  }

  const handleSearchInputValue = (e) => {
    console.log('pesquisa')
  }

  // Add modal
  const handleOpenModalAddClient = () => { setIsOpenAdd(true) }
  const handleCloseModalAddClient = () => { setIsOpenAdd(false) }    
  
  const handleOpenModalConfirm = () => { 
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
    
    if(checkboxes.length == 0) {
      setiIsOpenConfirm(false)     
    } else {
      setiIsOpenConfirm(true)     
    }
  }
  const handleCloseModalConfirm = () => { setiIsOpenConfirm(false) }

  // Modal styles
  const customStylesClient = {
    content: {        
      minWidth: '1152px', 
      height: 'max-content',      
      top: '50%',      
      left: '50%',
      transform: 'translate(-50%, -50%)',                     
    },
  }

  // Confirm Modal
  const customStylesConfirm = {
    content: {  
      width: '300px',    
      height: 'max-content',
      top: '50%',
      left: '50%',            
      transform: 'translate(-50%, -50%)',
    },
  }
  
  const countClients = clients.length  
  
  return (
    <main className="flex flex-col w-full h-full overflow-hidden bg-white p-10" id="root">
    
    <TableActions 
      deleteItems={handleOpenModalConfirm}
      addItems={handleOpenModalAddClient}  
      search={handleSearchInputValue}    
    />

    <Modal 
      isOpen={isOpenConfirm}        
      onRequestClose={handleCloseModalConfirm}
      style={customStylesConfirm}
      contentLabel="Confirma"
    >
      <ConfirmModal 
        yes={handleDeleteItems}
        no={handleCloseModalConfirm}
      />
    </Modal>

      <div className="scrollbar overflow-auto">
        <table className="w-full min-w-max border-collapse whitespace-nowrap">                   
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
              <th className="text-blue-400">CNPJ</th>
              <th className="text-blue-400">Email</th>
              <th className="text-blue-400">DDD</th>
              <th className="text-blue-400">Telefone</th>
              <th className="text-blue-400">Estado</th>
              <th className="text-blue-400">Cidade</th>
              <th className="text-blue-400">Endereço</th>
              <th className="text-blue-400">CEP</th>
              <th className="text-blue-400">Bairro</th>
              <th className="text-blue-400">Responsavel</th>
              <th className="text-blue-400">Insc. Estadual</th>
              <th className="text-blue-400">Ações</th>
            </tr>
          </thead>
                
          {clients.map((client) => {
            return (
              <TableBody 
                key={client.id}
                id={client.id}
                razao={client.razao}
                responsavel={client.responsavel}
                ddd={client.ddd}
                telefone={client.telefone}
                endereço={client.endereço}
                cnpj={client.cnpj}
                inscricao_estadual={client.inscricao_estadual}
                email={client.email}
                cep={client.cep}
                estado={client.estado}
                cidade={client.cidade}
                bairro={client.bairro} 
              />
            )
          })}

        </table>
      </div>

      <TableFooter 
        quantityPerPage={countClients}
        quantityTotal={countClients}
        quantityPages={1}
      />

      <Modal
        isOpen={isOpenAdd}
        onRequestClose={handleCloseModalAddClient}
        style={customStylesClient}
      >
        <ClientModal 
          id={''}
          razao={''}
          responsavel={''}
          ddd={''}
          telefone={''}
          endereco={''}
          cnpj={''}
          inscricao_estadual={''}
          email={''}
          cep={''}
          estado={''}
          cidade={''}
          bairro={''}
          close={handleCloseModalAddClient}
          textButton={'Adicionar'}
          action={'insert'}
        />
      </Modal>    
    </main>
  )
}