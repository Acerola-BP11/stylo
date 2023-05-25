import InputClientModal from '../Inputs/InputClientModal'

export default function ClientModal({
  id,
  name,
  email,
  address,
  phone  
}) {
  return (
    <div className="flex items-center justify-center bg-[var(--background-opacity-modal)] inset-0 fixed">
      <form className="flex flex-col bg-white p-5 rounded-sm">
        <label className="mb-2 mt-4" for={id}>Nome:</label>
        <InputClientModal 
          type="text"
          value={name}
          id={id}
        />

        <label className="mb-2 mt-4" for={id}>Email:</label>      
        <InputClientModal 
          type="email"
          value={email}
          id={id}
        />

        <label className="mb-2 mt-4" for={id}>Endereço:</label>
        <InputClientModal 
          type="text"
          value={address}
          id={id}
        />

        <label className="mb-2 mt-4" for={id}>Telefone:</label>
        <InputClientModal 
          type="phone"
          value={phone}
          id={id}
        />
        
      </form>
    </div>
  )
}