export default function SpanError({
  text, 
  ...position
}) {
  return (
    <span className={`absolute ${position.top} ${position.bottom} ${position.left} ${position.right} text-sm text-red-400`}>{text}</span>
  )
}