export default function FormButton({
  color,
  text,
  onClick
}) {
  return (
    <button 
      className={`${color} px-5 py-3 text-white font-bold flex flex-row items-center hover:opacity-60`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}