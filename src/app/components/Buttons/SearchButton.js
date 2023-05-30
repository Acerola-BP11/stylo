import Image from 'next/image'

export default function SearchButton({
  onClick
}) {
  return (
    <button            
      className="hover:scale-110"
      onClick={onClick}
    >
      <Image 
        src={'/search.svg'}
        width={40}
        height={40}
        alt="Icone de uma lupa"
      />
    </button>
  )
}