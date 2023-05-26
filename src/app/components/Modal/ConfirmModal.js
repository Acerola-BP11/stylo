import Image from 'next/image'

export default function ConfirmModal({
  yes,
  no
}) {
  return (
    <form className="flex flex-col bg-white items-center justify-center">
      <Image 
        src={'./alert-triangle.svg'}        
        width={50}
        height={50}
        alt="Sinal de alerta"        
      />
      <span className="mt-5">Tem certeza?</span>
      <div className="flex flex-row w-full mt-5 items-center justify-between text-center text-white">
        <button type="button" className="bg-red-400 px-5 py-3" onClick={no}>Não</button>
        <button type="submit" className="bg-green-400 px-5 py-3" onClick={yes}>Sim</button>              
      </div>
    </form>
  )
}