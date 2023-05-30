import SearchInput from '../Inputs/SearchInput'
import PlusButton from '../Buttons/PlusButton'
import TrashButton from '../Buttons/TrashButton'

export default function TableActions({
  deleteItems,
  addItems
}) {
  return (
    <div className="flex flex-row mb-10 items-center justify-between">
      
      <div>
        <SearchInput />
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