import Image from 'next/image'
import PageButton from '../Buttons/PageButton'

export default function FooterTable({
  quantityPerPage,
  quantityTotal,
  quantityPages
}) {
  return (
    <div className="flex flex-row w-full mt-10 items-center text-center justify-between">
      <span>Mostrando <strong>{quantityPerPage}</strong> de <strong>{quantityTotal}</strong> registros</span>
      <div className="flex flex-row items-center justify-center">
        <button className="p-1 hover:bg-blue-100">
          <Image 
            src={'/chevron-left.svg'}
            width={20}           
            height={20} 
            alt="Seta para esquerda"                      
          />
        </button>
        
        <PageButton 
          page={quantityPages}
        />      
        
        <button className="p-1 hover:bg-blue-100">
          <Image 
            src={'/chevron-right.svg'}
            width={20}           
            height={20} 
            alt="Seta para direita"          
          />
        </button>
      </div>
    </div>
  )
}