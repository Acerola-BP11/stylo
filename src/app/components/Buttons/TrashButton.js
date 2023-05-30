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
        src={'/trash-2.svg'}
        width={40}
        height={40}
        alt={'Icone de um +'}
      />
    </button>
  )
}