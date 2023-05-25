import FooterTable from './Table/FooterTable'
import TableBody from './Table/TableBody'
import TableHead from './Table/TableHead'

import clients from '../js/clients.json'

export default function Main() {
  const countClients = clients.length
  
  return (
    <main className="flex flex-col w-full bg-white p-10">
      <table className="border-collapse w-full">
        <TableHead /> 
               
        {clients.map((client) => {
          return (
            <TableBody 
              key={client.id}
              name={client.name}
              email={client.email}
              address={client.address}
              phone={client.phone}
            />
          )
        })}

      </table>

      <FooterTable 
        quantityPerPage={countClients}
        quantityTotal={countClients}
        quantityPages={1}
      />
    </main>
  )
}