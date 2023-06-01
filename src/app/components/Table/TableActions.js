import SearchInput from '../Inputs/SearchInput'
import PlusButton from '../Buttons/PlusButton'
import TrashButton from '../Buttons/TrashButton'

export default function TableActions({
  deleteItems,
  addItems,
  searchItems
}) {
  return (
    <div className="flex flex-row mb-10 items-center justify-between">
      
      <div>
        <SearchInput 
          onClick={searchItems}
        />
      </div>
      
      <div className="flex flex-row">
        <TrashButton           
          onClick={deleteItems}
        />     

        <div className="mx-5" id="separator"></div>

        <PlusButton
          onClick={addItems}
        />
      </div>  
    </div>
  )
}