import Image from 'next/image'

export default function Button({
  color, 
  text,
  icon
}) {
  return (
    <button 
      className={`${color} mx-2 px-5 py-3 text-white font-bold flex flex-row items-center hover:opacity-60`} 
    >
      <Image 
        src={icon}
        width={20}
        height={20}
        className="mr-2"
        alt="Icones"
      />

      {text}
    </button>
  )
}