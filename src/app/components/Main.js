import FooterTable from './Table/FooterTable'
import TableBody from './Table/TableBody'
import TableHead from './Table/TableHead'

import clients from '../js/clients.json'

export default function Main() {
  const countClients = clients.length
  
  return (
    <main className="flex flex-col w-full h-full overflow-hidden bg-white p-10">
      <div className="scrollbar overflow-auto">
        <table className="w-max border-collapse whitespace-nowrap">
          <TableHead /> 
                
          {clients.map((client) => {
            return (
              <TableBody 
                key={client.id}
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

      <FooterTable 
        quantityPerPage={countClients}
        quantityTotal={countClients}
        quantityPages={1}
      />
    </main>
  )
}