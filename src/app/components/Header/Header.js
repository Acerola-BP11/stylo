import HeaderButton from '../Buttons/HeaderButton'

export default function Header() {
  return (
    <header className="flex flex-row w-full p-10 items-center text-center justify-between bg-slate-500">
      <span className="text-2xl text-white font-extrabold tracking-[0.5rem]">STYLO</span>
      <div className="flex flex-row">
        <HeaderButton 
          color='bg-red-400'
          text='Delete'
          icon={'/minus-circle.svg'}
        />        
        <HeaderButton 
          color='bg-green-400'
          text='Adicionar novo registro'
          icon={'/plus-circle.svg'}
        />
      </div>
    </header>
  )
}