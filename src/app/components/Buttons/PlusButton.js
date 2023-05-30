import Image from 'next/image'

export default function PlusButton({
  onClick
}) {
  return (
    <button 
      className="hover:scale-110"
      onClick={onClick}
    >
      <Image 
        src={'/plus.svg'}
        width={50}
        height={50}
        alt={'Icone de um +'}
        onClick={onClick}
      />
    </button>
  )
}