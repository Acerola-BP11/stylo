export default function FormButton({
  color,
  text,
  type,
  onClick
}) {
  return (
    <button 
      type={type}  
      className={`${color} px-5 py-3 text-white font-bold flex flex-row items-center hover:opacity-60`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}