import { useState } from "react"

import TableFooter from './Table/TableFooter'
import TableBody from './Table/TableBody'
import TableActions from './Table/TableActions'

import clients from '../js/clients.json'

export default function Main() {  
  const [isAllChecked, setIsAllChecked] = useState(false)

  const handleCheckboxChange = () => { 
    setIsAllChecked(!isAllChecked)  
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = isAllChecked;
    });
  }  

  const handleDeleteItems = () => {
    console.log('deletar')

    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');            

    checkboxes.forEach((checkbox) => {      
      console.log(checkbox);
      // Já esta pegando o ID, agora é só usar esse ID para deletar no banco
    });    
  }

  const handleAddItems = () => {
    console.log('adicionar')
  }

  const countClients = clients.length  
  
  return (
    <main className="flex flex-col w-full h-full overflow-hidden bg-white p-10">
    
    <TableActions 
      deleteItems={handleDeleteItems}
      addItems={handleAddItems}
    />

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
    </main>
  )
}