export default function InputClientModal({
  type,
  value,
  id
}) {
  return (
    <input 
      className="p-2 border"
      type={type} 
      value={value}
      id={id}
    />
  )
}