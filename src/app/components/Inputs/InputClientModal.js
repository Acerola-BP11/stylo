export default function InputClientModal({
  type,
  value,
  id,
  onChange
}) {
  return (
    <input 
      className="p-2 border"
      type={type} 
      value={value}
      id={id}
      onChange={onChange}
    />
  )
}