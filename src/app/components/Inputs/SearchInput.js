import Image from 'next/image'
import SearchButton from '../Buttons/SearchButton'

export default function SearchInput({
  searching
}) {
  return (
    <div className="flex flex-row items-center justify-center text-center">      
      <input 
        className="w-96 p-3 border border-solid"
        type="text" 
        placeholder="Faça sua pesquisa"  
      />       
      <div className="flex items-center jusitfy-center ml-2">
        <SearchButton 
          onClick={searching}
        />
      </div>
    </div>
  )
}